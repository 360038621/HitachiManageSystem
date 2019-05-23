
/* JavaScript content from app/view/startProcess/InformationTechnology/ApplicationProcessSingleUserPermissions.js in folder common */
/*
 * File: app/view/IT_panel11.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HelcOA.view.startProcess.InformationTechnology.ApplicationProcessSingleUserPermissions', {
    extend: 'Ext.Panel',
    id:'ApplicationProcessSingleUserPermissions_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.form.Panel',
        'Ext.Label',
        'Ext.form.FieldSet',
        'Ext.field.DatePicker',
        'Ext.picker.Date',
        'Ext.field.TextArea'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '用户权限申请流程单',
                items: [
{
    xtype: 'button',
    ui: 'back',
    text: '返回',
    listeners:{
    	tap:function(){
    		var obj=Ext.getCmp('StartprocessName_id');
    		if(!obj){
    			obj=Ext.create('HelcOA.view.startProcess.StartprocessName');
    		}
    		Ext.Viewport.setActiveItem(obj);
    	}
    }
},
{
    xtype: 'spacer'
},
{
	 xtype: 'button',
     handler: function(button, e) {
         var menu = Ext.create('Ext.Menu', {
             items: [
             {
                 text: '提交',
                 listeners:{
                 	tap:function(){
                 		var obj=Ext.getCmp('ApplicationProcessSingleUserPermissionsCommit_id');
                 		if(!obj){
                 			obj=Ext.create('HelcOA.view.startProcess.InformationTechnology.ApplicationProcessSingleUserPermissionsCommit');
                 		}
                 		Ext.Viewport.setActiveItem(obj);
                 	}
                 },
                 handler:function(button,e){
                	 Ext.Viewport.hideMenu('right');
                	 
                }
             },
             {
                 text: '保存',
                     handler:function(button,e){
                     	 Ext.Viewport.hideMenu('right');
                     	 
                     }
             },
             {
                 text: '意见',
                 handler:function(button,e){
                	 Ext.Viewport.hideMenu('right');
                	 
                }
             }
             ]
         });

         Ext.Viewport.setMenu(menu, {
             side: 'right',
             reveal: false
         });

         Ext.Viewport.showMenu('right');
     },
     itemId: 'mybutton3',
     iconCls: 'more'
}
                ]
            },
            {
                xtype: 'formpanel',
                flex: 1,
                items: [
                    {
                        xtype: 'label',
                        html: '此流程只适用于用户权限的新增/变更的申请并且需简述清楚申请权限职能和原因，不适用于系统登陆账号申请，如要申请开通系统账号，请通过<系统网络帐号权限申请>电子流程进行申请即可。 如对本流程有任何疑问请致信息中心020-39908380(分机8380) 黎展亮。',
                        margin: 10
                    },
                    {
                        xtype: 'fieldset',
                        items: [
                            {
                                xtype: 'textfield',
                                label: '编号',
                                labelWidth: '40%',
                                placeHolder: '请输入编号'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '',
                        items: [
                            {
                                xtype: 'textfield',
                                label: '标题',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请输入标题'
                            },
                            {
                                xtype: 'textfield',
                                label: '申请部门',
                                labelWidth: '40%',
                                placeHolder: '请输入申请部门'
                            },
                            {
                                xtype: 'datepickerfield',
                                label: '申请时间',
                                labelWidth: '40%',
                                placeHolder: '请输入申请时间',
                                picker: {
                                    doneButton: '完成',
                                    cancelButton: '取消'
                                }
                            },
                            {
                                xtype: 'textfield',
                                label: '申请人',
                                labelWidth: '40%',
                                placeHolder: '请输入申请人姓名'
                            },
                            {
                                xtype: 'textfield',
                                label: '联系电话',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请输入联系电话'
                            },
                            {
                                xtype: 'selectfield',
                                label: '申请类型',
                                labelWidth: '40%',
                                placeHolder: '请选择申请类型',
                                options: [
                                    {
                                        text: '导出',
                                        value: '导出'
                                    },
                                    {
                                        text: '修改',
                                        value: '修改'
                                    },
                                    {
                                        text: '导入',
                                        value: '导入'
                                    }
                                ]
                            },
                            {
                                xtype: 'selectfield',
                                label: '系统名称',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请选择系统名称',
                                options: [
                                    {
                                        text: '导出',
                                        value: '导出'
                                    },
                                    {
                                        text: '修改',
                                        value: '修改'
                                    },
                                    {
                                        text: '导入',
                                        value: '导入'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '使用人员',
                        items: [
                            {
                                xtype: 'textfield',
                                label: '部门',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请输入使用人员部门'
                            },
                            {
                                xtype: 'textfield',
                                label: '岗位',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请输入使用人员岗位'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        itemId: 'myfieldset96',
                        title: '',
                        items: [
                            {
                                xtype: 'textareafield',
                                label: '申请权限',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请输入申请权限简述'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        margin: '0 0 20 0',
                        title: '',
                        items: [
                            {
                                xtype: 'container',
                                layout: {
                                    type: 'hbox',
                                    align: 'start',
                                    pack: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'button',
                                        margin: 10,
                                        width: 120,
                                        text: '拍照'
                                    },
                                    {
                                        xtype: 'button',
                                        margin: 10,
                                        width: 120,
                                        text: '浏览'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }

});