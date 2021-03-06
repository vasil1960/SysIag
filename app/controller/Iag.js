/*
 * File: app/controller/Iag.js
 *
 * This file was generated by Sencha Architect version 3.5.1.
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

Ext.define('sysIag.controller.Iag', {
    extend: 'Ext.app.Controller',
    alias: 'controller.iag',

    requires: [
        'Ext.MessageBox'
    ],

    config: {
        refs: {
            iagphonelist: 'iagphonelist',
            iagsearchfield: '#iagsearchfield',
            phones: 'maintabpanel #phones'
        },

        control: {
            "searchfield": {
                clearicontap: 'onSearchfieldClearicontap'
            },
            "iagphonelist": {
                itemtap: 'onIagphonelistItemTap',
                show: 'onIagphonelistShow'
            },
            "iagsearchfield": {
                keyup: 'onIagSearchfieldKeyup'
            }
        }
    },

    onSearchfieldClearicontap: function(textfield, e, eOpts) {

        this.getApplication().getController('Func').clearSearchField('iagPhone');

    },

    onIagphonelistItemTap: function(dataview, index, target, record, e, eOpts) {

        this.getApplication().getController('Func').callAndEmailFn(record);

    },

    onIagphonelistShow: function(component, eOpts) {
        console.log('show');

        this.getApplication().getController('Func').loadStore('iagPhone');
    },

    onIagSearchfieldKeyup: function(textfield, e, eOpts) {
        this.getApplication().getController('Func').searchOnNameAndFamilia(textfield,'iagPhone', 'Name', 'Familia');
    }

});