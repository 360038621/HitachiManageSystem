/*
 * File: app/controller/PublicController.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HelcRemote.controller.PublicController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "dataview#nav_indexList": {
                itemtap: 'onNav_indexListItemSelect'
            },
            "button#setup_BtnReturn": {
                tap: 'onSetup_BtnReturnTap'
            },
            "button#setup_BtnRemoteServer_Select_Set": {
                tap: 'onSetup_BtnRemoteServer_Select_SetTap'
            },
            "button#setup_BtnRemoteServer_Set": {
                tap: 'onSetup_BtnRemoteServer_SetTap'
            },
            "button#setup_BtnCMSServer_Set": {
                tap: 'onSetup_BtnCMSServer_SetTap'
            },
            "button#setup_BtnDeviceServer_Set": {
                tap: 'onSetup_BtnDeviceServer_SetTap'
            },
            "button#setup_BtnACServer_Set": {
                tap: 'onSetup_BtnACServer_SetTap'
            },
            "button#setup_BtnRemoteSend": {
                tap: 'onSetup_BtnRemoteSendTap'
            },
            "button#setup_BtnRemoteSend2": {
                tap: 'onSetup_BtnRemoteSend2Tap'
            },
            "button#setup_BtnRemoteConn": {
                tap: 'onSetup_BtnRemoteConnTap'
            },
            "button#setup_BtnRemoteDisConn": {
                tap: 'onSetup_BtnRemoteDisConnTap'
            },
            "panel#setup": {
                show: 'onSetupShow'
            },
            "panel#index": {
                show: 'onIndexShow'
            },
            "button#index_BtnRemote": {
                tap: 'onIndex_BtnRemoteTap'
            },
            "button#index_BtnTerminal": {
                tap: 'onIndex_BtnTerminalTap'
            },
            "button#index_BtnDevice": {
                tap: 'onIndex_BtnDeviceTap'
            },
            "button#index_BtnAC": {
                tap: 'onIndex_BtnACTap'
            },
            "button#index_BtnSetup": {
                tap: 'onIndex_BtnSetupTap'
            }
        }
    },

    onNav_indexListItemSelect: function(dataview, index, target, record, e, eOpts) {
        var parent = Ext.getCmp('remote_Main');
        var classname;
        var onInitial = Ext.emptyFn();
        var onShow = Ext.emptyFn();

        if(index===0) {
            viewUtil.goLast();
            return;
        }

        var text = record.get('text');
        switch(text) {
            case '生命周期':
                classname = 'Lifecycle.subNav';
                onInitial = function() {
                    viewPath.initial('电梯全生命周期展示');
                    viewPath.push('首页');
                };
                onShow = function() {
                    remote.send(dataview, 0);
                };
                break;

            case '售后':
                classname = 'Service.subNav';
                onInitial = function() {
                    viewPath.initial('售后');
                };
                onShow = function() {
                    remote.send(dataview, 6);
                };
                break;

            case '工作模式':
                var mode = remote.getScreenMode();
                if(mode==='0') {
                    classname = 'Online.subNav1'; // 大屏进入工作模式1
                } else {
                    classname = 'Online.subNav2'; // 中屏无工作模式1，进入工作模式2
                }
                onInitial = function() {
                    viewPath.initial('工作模式');
                    if(mode==='1') {
                        Ext.getCmp('Online_BtnOnline2').setHidden(true); // 中屏无工作模式1，隐藏切换按钮
                        Ext.getCmp('Online_Title2').setHtml('工作模式');
                    }
                };
                onShow = function() {
                    remote.send(dataview, 8*10 + Number(mode));
                };
                break;

            default:
                //首页
                //研发
                //生产
                //设计
                //销售
                //物流
                //售后
                //培训
                //工作模式
                //Ext.toast(text);
                break;
        }

        subView.show({classname:classname, parent:parent, onInitial:onInitial, onShow:onShow});
    },

    onSetup_BtnReturnTap: function(button, e, eOpts) {
        // 关闭设置画面
        // console.log(Ext.getCmp('setup_form').getValues());
        viewUtil.goLast();
    },

    onSetup_BtnRemoteServer_Select_SetTap: function(button, e, eOpts) {
        // 检查授权码
        var id  = Ext.getCmp('setup_remote_server_select').getValue() || 'dummy';
        var pwd = Ext.getCmp('setup_remote_server_password').getValue() || 'dummy';
        var ip  = '127.0.0.1';

        // 取屏幕id、模式
        var mode = '1';
        var areaCode = 'all';
        var name = '';
        Ext.getCmp('setup_remote_server_select').getStore().each(function(rec) {
            if(rec.data.id === id) {
                mode = rec.data.mode;
                ip = rec.data.value;
                name = rec.data.text;
                return;
            }
        });

        // console.log(id,ip, pwd, mode, name);
        if(name.indexOf('成都')>=0) {
            areaCode = 'huaxi';
        } else if(name.indexOf('天津')>=0) {
            areaCode = 'huabei';
        } else if(name.indexOf('上海')>=0) {
            areaCode = 'huadong';
        } else if(name.indexOf('广州')>=0) {
            areaCode = 'huanan';
        }

        // 后门密码
        if(pwd==='gzunicorn12345') {
            remote.setGodMode(true);
            Ext.getCmp('setup_PanelGodMode').setHidden(!remote.isGodMode());
            Ext.getCmp('setup_PanelTest').setHidden(!remote.isGodMode());
            return;
        }

        remote.setGodMode(false);
        Ext.getCmp('setup_PanelGodMode').setHidden(!remote.isGodMode());
        Ext.getCmp('setup_PanelTest').setHidden(!remote.isGodMode());


        // 验证密码
        Ext.data.JsonP.request({
           url: 'http://' + remote.getCmsIP() + '/YL_SCDG/hitachi/screen/checkScreenPwd.do',
           params: {
               id: id,
               pwd: pwd
           },
           callbackKey: 'callback',
           success: function(result, request) {
        //        console.log(result);
               if(result.result) {
                   Ext.toast('授权码正确！');
                    // 设定遥控前端机IP
                    Ext.getCmp('setup_remote_server').setValue(ip);
                    dataUtil.setLocalVariable('REMOTEIP', ip);
                    remote.setIP(ip);

                    // 设定屏幕模式
                    Ext.getCmp('setup_remote_screen_mode').setValue(mode);
                    dataUtil.setLocalVariable('SCREENMODE', mode);
                    dataUtil.setLocalVariable('AREACODE', areaCode);
                    remote.setScreenMode(mode);
                    remote.setArea(areaCode);
               } else {
                   Ext.toast('授权码错误，请重新输入！');
               }
           },
           failure: function() {
               Ext.toast('连接服务器是出现错误，请重试！');
           }
        });
    },

    onSetup_BtnRemoteServer_SetTap: function(button, e, eOpts) {
        // 设定遥控前端机IP
        var v = Ext.getCmp('setup_remote_server').getValue();
        dataUtil.setLocalVariable('REMOTEIP', v);
        remote.setIP(v);

        // 设定屏幕模式
        v = Ext.getCmp('setup_remote_screen_mode').getValue();
        dataUtil.setLocalVariable('SCREENMODE', v);
        remote.setScreenMode(v);
    },

    onSetup_BtnCMSServer_SetTap: function(button, e, eOpts) {
        // 设定CMS IP
        var v = Ext.getCmp('setup_cms_server').getValue();
        dataUtil.setLocalVariable('CMSIP', v);
        remote.setCmsIP(v);
    },

    onSetup_BtnDeviceServer_SetTap: function(button, e, eOpts) {
        // 设定智能中控IP
        var v = Ext.getCmp('setup_device_server').getValue();
        dataUtil.setLocalVariable('DEVICEIP', v);
        deviceRemote.setIP(v);
    },

    onSetup_BtnACServer_SetTap: function(button, e, eOpts) {
        // 设定空调中控IP
        var v = Ext.getCmp('setup_ac_server').getValue();
        dataUtil.setLocalVariable('ACIP', v);
        acRemote.setIP(v);
    },

    onSetup_BtnRemoteSendTap: function(button, e, eOpts) {
        var cmd  = Ext.getCmp('setup_command').getValue();//.toUpperCase();
        var parm = Ext.getCmp('setup_parm').getValue();
        var onSuccess = function() {
            loadMask.hide();
        };
        var onFailure = function() {
            loadMask.hide();
            Ext.toast('发送指令失败！');
        };
        loadMask.show('正在发送指令，请稍候...', onFailure);
        remote.send(cmd, undefined, parm, onSuccess, onFailure);
    },

    onSetup_BtnRemoteSend2Tap: function(button, e, eOpts) {
        var cmd  = Ext.getCmp('setup_device_cmd').getValue().toUpperCase();
        Ext.getCmp('setup_device_cmd').setValue(cmd);
        deviceRemote.send(cmd);
    },

    onSetup_BtnRemoteConnTap: function(button, e, eOpts) {
        deviceRemote.open();
    },

    onSetup_BtnRemoteDisConnTap: function(button, e, eOpts) {
        deviceRemote.close();
    },

    onSetupShow: function(component, eOpts) {
        Ext.getCmp('setup_remote_server').setValue(remote.getIP());
        Ext.getCmp('setup_remote_server_select').setValue(remote.getIP());
        Ext.getCmp('setup_remote_screen_mode').setValue(remote.getScreenMode());

        Ext.getCmp('setup_cms_server').setValue(remote.getCmsIP());
        Ext.getCmp('setup_device_server').setValue(deviceRemote.getIP());
        Ext.getCmp('setup_ac_server').setValue(acRemote.getIP());

        // 隐藏开发模式设置项目
        Ext.getCmp('setup_PanelGodMode').setHidden(!remote.isGodMode());
        Ext.getCmp('setup_PanelTest').setHidden(!remote.isGodMode());

        // 取屏幕列表
        dataUtil.createStore('Public_Screens').loadDat(Ext.emptyFn, Ext.emptyFn, remote.isGodMode()? 'all':'work');
    },

    onIndexShow: function(component, eOpts) {
        if(remote.getScreenMode() === '1') {
            Ext.getCmp('index_BtnAC').setHidden(true);
            Ext.getCmp('index_BtnDevice').setHidden(true);
            Ext.getCmp('index_BtnTerminal').setHidden(true);
            Ext.getCmp('index_PanelRight').setHidden(true);
        } else {
            Ext.getCmp('index_BtnAC').setHidden(false);
            Ext.getCmp('index_BtnDevice').setHidden(false);
            Ext.getCmp('index_BtnTerminal').setHidden(false);
            Ext.getCmp('index_PanelRight').setHidden(false);
        }
        var title = '日立电梯云服务体验中心';
        var area = remote.getArea();
        switch(area.code) {
            case 'huanan':
            case 'huadong':
            case 'huabei':
            case 'huaxi':
                title += '(' + area.name +')';
                break;
        }
        Ext.getCmp('index_Title').setHtml(title);
    },

    onIndex_BtnRemoteTap: function(button, e, eOpts) {
        // 解说助手
        if(global.isWorklight()) {
            var url = remote.getIP();

            var onSuccess = function() {
                loadMask.hide();
                viewUtil.goNext('nav_index');
            };
            var onFailure = function() {
                loadMask.hide();
                Ext.toast('未能连接屏幕控制器！');
            };

            loadMask.show('正在连接屏幕控制器('+ url + '), 请稍候...', onFailure);
            remote.send('#dummy', undefined, undefined, onSuccess, onFailure);
        } else {
            viewUtil.goNext('nav_index');
        }
    },

    onIndex_BtnTerminalTap: function(button, e, eOpts) {
        // 终端监控
        viewUtil.goNext('nav_index_terminal');
    },

    onIndex_BtnDeviceTap: function(button, e, eOpts) {
        // 灯光、音响控制
        if(global.isWorklight()) {
            deviceRemote.open(function() {
                viewUtil.goNext('nav_index_device');
            });
        } else {
            viewUtil.goNext('nav_index_device');
        }
    },

    onIndex_BtnACTap: function(button, e, eOpts) {
        // 空调控制
        if(global.isWorklight()) {
            acRemote.send('AQUERY',function() {
                viewUtil.goNext('nav_index_ac');
            });
        } else {
            viewUtil.goNext('nav_index_ac');
        }
    },

    onIndex_BtnSetupTap: function(button, e, eOpts) {
        // 设置
        viewUtil.goNext('setup', {onInitial: function() {
            var ip = remote.getIP();
            if(ip && ip!=='') {
                Ext.getCmp('setup_remote_server').setValue(ip);
            }
        }});
    },

    loadSetupData: function() {
        // 取所有IP地址
        dataUtil.getLocalVariable('REMOTEIP', function(ip) {
            remote.setIP(ip);
        });
        dataUtil.getLocalVariable('CMSIP', function(ip) {
            remote.setCmsIP(ip);
        });
        dataUtil.getLocalVariable('DEVICEIP', function(ip) {
            deviceRemote.setIP(ip);
        });
        dataUtil.getLocalVariable('ACIP', function(ip) {
            acRemote.setIP(ip);
        });

        // 屏幕模式
        dataUtil.getLocalVariable('SCREENMODE', function(mode) {
            remote.setScreenMode(mode);
        });
        dataUtil.getLocalVariable('AREACODE', function(area) {
            remote.setArea(area);
        });
    }

});