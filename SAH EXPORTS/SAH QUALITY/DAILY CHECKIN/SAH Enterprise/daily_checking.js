frappe.ui.form.on('Inline Stitching CT', {
    double_stitch(frm, cdt, cdn) {
        set_tax(frm, cdt, cdn);
    },

    open_seam(frm, cdt, cdn) {
        set_tax(frm, cdt, cdn);
    },

    loose_stitch(frm, cdt, cdn) {
        set_tax(frm, cdt, cdn);
    },
    oil_stain(frm, cdt, cdn) {
        set_tax(frm, cdt, cdn);
    },
    overlap_feb(frm, cdt, cdn) {
        set_tax(frm, cdt, cdn);
    },
    puckering(frm, cdt, cdn) {
        set_tax(frm, cdt, cdn);
    },
    raw_edge(frm, cdt, cdn) {
        set_tax(frm, cdt, cdn);
    },
    spi(frm, cdt, cdn) {
        set_tax(frm, cdt, cdn);
    },
    uneven_stitch(frm, cdt, cdn) {
        set_tax(frm, cdt, cdn);
    },
    bad_stitch(frm, cdt, cdn) {
        set_tax(frm, cdt, cdn);
    },
    open_safty(frm, cdt, cdn) {
        set_tax(frm, cdt, cdn);
    },
    skip_stitch(frm, cdt, cdn) {
        set_tax(frm, cdt, cdn);
    },

    boot_mark(frm, cdt, cdn) {
        set_tax(frm, cdt, cdn);
    },

    damage(frm, cdt, cdn) {
        set_tax(frm, cdt, cdn);
    },

    wrong_direction(frm, cdt, cdn) {
        set_tax(frm, cdt, cdn);
    },

    number_label_missing(frm, cdt, cdn) {
        set_tax(frm, cdt, cdn);
    },


    defects_qty(frm, cdt, cdn) {
        set_tax(frm, cdt, cdn);
    },

});



function set_tax(frm, cdt, cdn) {
    var d = locals[cdt][cdn];
    frappe.model.set_value(d.doctype, d.name, 'total_defect_pcs', d.double_stitch + d.defects_qty + d.open_seam + d.loose_stitch + d.oil_stain + d.overlap_feb + d.puckering + d.raw_edge + d.spi + d.uneven_stitch + d.bad_stitch + d.open_safty + d.skip_stitch + d.boot_mark + d.damage + d.wrong_direction + d.number_label_missing);
}


frappe.ui.form.on('Inline Stitching CT', {
    total_defect_pcs: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var total_defects = 0;
        frm.doc.table_11.forEach(function (d) {
            total_defects += d.total_defect_pcs;
        });

        frm.set_value('total_defects', total_defects);
        refresh_field('total_defects');




    },
    table_11_remove: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var total_defects = 0;
        frm.doc.table_11.forEach(function (d) { total_defects += d.total_defect_pcs; });

        frm.set_value('total_defects', total_defects);
        refresh_field('total_defects');



    }
});




frappe.ui.form.on('Inline Stitching CT', {
    double_stitch: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var double_stitch_total = 0;

        frm.doc.table_11.forEach(function (d) {
            double_stitch_total += d.double_stitch;
        });

        frm.set_value('double_stitch_total', double_stitch_total);
        refresh_field('double_stitch_total');



    },

    table_11_remove: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var double_stitch_total = 0;
        frm.doc.table_11.forEach(function (d) { double_stitch_total += d.double_stitch; });
        if (frm.doc.status < 1) {
            frm.set_value('double_stitch_total', double_stitch_total);
            refresh_field('double_stitch_total');
        }
    }
});



frappe.ui.form.on('Inline Stitching CT', {
    open_seam: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var open_seam_total = 0;
        frm.doc.table_11.forEach(function (d) {
            open_seam_total += d.open_seam;
        });
        if (frm.doc.status < 1) {
            frm.set_value('open_seam_total', open_seam_total);
            refresh_field('open_seam_total');
        }
    },

    table_11_remove: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var open_seam_total = 0;
        frm.doc.table_11.forEach(function (d) { open_seam_total += d.open_seam; });
        if (frm.doc.status < 1) {
            frm.set_value('open_seam_total', open_seam_total);
            refresh_field('open_seam_total');
        }
    }
});


frappe.ui.form.on('Inline Stitching CT', "refresh", {
    loose_stitch: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var loose_stitch_total = 0;
        frm.doc.table_11.forEach(function (d) {
            loose_stitch_total += d.loose_stitch;
        });
        if (frm.doc.status < 1) {
            frm.set_value('loose_stitch_total', loose_stitch_total);
            refresh_field('loose_stitch_total');
        }
    },

    table_11_remove: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var loose_stitch_total = 0;
        frm.doc.table_11.forEach(function (d) { loose_stitch_total += d.loose_stitch; });
        if (frm.doc.status < 1) {
            frm.set_value('loose_stitch_total', loose_stitch_total);
            refresh_field('loose_stitch_total');
        }
    }
});




frappe.ui.form.on('Inline Stitching CT', {
    oil_stain: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var oil_stain_total = 0;
        frm.doc.table_11.forEach(function (d) {
            oil_stain_total += d.oil_stain;
        });
        if (frm.doc.status < 1) {
            frm.set_value('oil_stain_total', oil_stain_total);
            refresh_field('oil_stain_total');
        }
    },

    table_11_remove: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var oil_stain_total = 0;
        frm.doc.table_11.forEach(function (d) { oil_stain_total += d.oil_stain; });
        if (frm.doc.status < 1) {
            frm.set_value('oil_stain_total', oil_stain_total);
            refresh_field('oil_stain_total');
        }
    }
});


frappe.ui.form.on('Inline Stitching CT', {
    overlap_feb: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var overlap_feb_total = 0;
        frm.doc.table_11.forEach(function (d) {
            overlap_feb_total += d.overlap_feb;
        });
        if (frm.doc.status < 1) {
            frm.set_value('overlap_feb_total', overlap_feb_total);
            refresh_field('overlap_feb_total');
        }
    },

    table_11_remove: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var overlap_feb_total = 0;
        frm.doc.table_11.forEach(function (d) { overlap_feb_total += d.overlap_feb; });
        if (frm.doc.status < 1) {
            frm.set_value('overlap_feb_total', overlap_feb_total);
            refresh_field('overlap_feb_total');

        }
    }
});






frappe.ui.form.on('Inline Stitching CT', {
    puckering: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var puckering_total = 0;
        frm.doc.table_11.forEach(function (d) {
            puckering_total += d.puckering;
        });
        if (frm.doc.status < 1) {
            frm.set_value('puckering_total', puckering_total);
            refresh_field('puckering_total');
        }
    },

    table_11_remove: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var puckering_total = 0;
        frm.doc.table_11.forEach(function (d) { puckering_total += d.puckering; });
        if (frm.doc.status < 1) {
            frm.set_value('puckering_total', puckering_total);
            refresh_field('puckering_total');
        }

    }
});




frappe.ui.form.on('Inline Stitching CT', {
    raw_edge: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var raw_edge_total = 0;
        frm.doc.table_11.forEach(function (d) {
            raw_edge_total += d.raw_edge;
        });
        if (frm.doc.status < 1) {
            frm.set_value('raw_edge_total', raw_edge_total);
            refresh_field('raw_edge_total');
        }
    },

    table_11_remove: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var raw_edge_total = 0;
        frm.doc.table_11.forEach(function (d) { raw_edge_total += d.raw_edge; });
        if (frm.doc.status < 1) {
            frm.set_value('raw_edge_total', raw_edge_total);
            refresh_field('raw_edge_total');
        }
    }

});




frappe.ui.form.on('Inline Stitching CT', {
    spi: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var spi_total = 0;
        frm.doc.table_11.forEach(function (d) {
            spi_total += d.spi;
        });
        if (frm.doc.status < 1) {
            frm.set_value('spi_total', spi_total);
            refresh_field('spi_total');
        }
    },

    table_11_remove: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var spi_total = 0;
        frm.doc.table_11.forEach(function (d) { spi_total += d.spi; });
        if (frm.doc.status < 1) {
            frm.set_value('spi_total', spi_total);
            refresh_field('spi_total');
        }
    }
});




frappe.ui.form.on('Inline Stitching CT', {
    uneven_stitch: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var uneven_stitch_total = 0;
        frm.doc.table_11.forEach(function (d) {
            uneven_stitch_total += d.uneven_stitch;
        });
        if (frm.doc.status < 1) {
            frm.set_value('uneven_stitch_total', uneven_stitch_total);
            refresh_field('uneven_stitch_total');
        }
    },

    table_11_remove: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var uneven_stitch_total = 0;
        frm.doc.table_11.forEach(function (d) { uneven_stitch_total += d.uneven_stitch; });
        if (frm.doc.status < 1) {
            frm.set_value('uneven_stitch_total', uneven_stitch_total);
            refresh_field('uneven_stitch_total');
        }
    }
});





frappe.ui.form.on('Inline Stitching CT', {
    bad_stitch: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var bad_stitch_total = 0;
        frm.doc.table_11.forEach(function (d) {
            bad_stitch_total += d.bad_stitch;
        });
        if (frm.doc.status < 1) {
            frm.set_value('bad_stitch_total', bad_stitch_total);
            refresh_field('bad_stitch_total');
        }
    },

    table_11_remove: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var bad_stitch_total = 0;
        frm.doc.table_11.forEach(function (d) { bad_stitch_total += d.bad_stitch; });
        if (frm.doc.status < 1) {
            frm.set_value('bad_stitch_total', bad_stitch_total);
            refresh_field('bad_stitch_total');
        }
    }
});






frappe.ui.form.on('Inline Stitching CT', {
    open_safty: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var open_safty_total = 0;
        frm.doc.table_11.forEach(function (d) {
            open_safty_total += d.open_safty;
        });
        if (frm.doc.status < 1) {
            frm.set_value('open_safty_total', open_safty_total);
            refresh_field('open_safty_total');
        }
    },

    table_11_remove: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var open_safty_total = 0;
        frm.doc.table_11.forEach(function (d) { open_safty_total += d.open_safty; });
        if (frm.doc.status < 1) {
            frm.set_value('open_safty_total', open_safty_total);
            refresh_field('open_safty_total');
        }
    }
});





frappe.ui.form.on('Inline Stitching CT', {
    skip_stitch: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var skip_stitch_total = 0;
        frm.doc.table_11.forEach(function (d) {
            skip_stitch_total += d.skip_stitch;
        });
        if (frm.doc.status < 1) {
            frm.set_value('skip_stitch_total', skip_stitch_total);
            refresh_field('skip_stitch_total');
        }
    },

    table_11_remove: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var skip_stitch_total = 0;
        frm.doc.table_11.forEach(function (d) { skip_stitch_total += d.skip_stitch; });
        if (frm.doc.status < 1) {
            frm.set_value('skip_stitch_total', skip_stitch_total);
            refresh_field('skip_stitch_total');
        }
    }
});




frappe.ui.form.on('Inline Stitching CT', {
    boot_mark: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var boot_mark_total = 0;
        frm.doc.table_11.forEach(function (d) {
            boot_mark_total += d.boot_mark;
        });
        if (frm.doc.status < 1) {
            frm.set_value('boot_mark_total', boot_mark_total);
            refresh_field('boot_mark_total');
        }
    },

    table_11_remove: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var boot_mark_total = 0;
        frm.doc.table_11.forEach(function (d) { boot_mark_total += d.boot_mark; });
        if (frm.doc.status < 1) {
            frm.set_value('boot_mark_total', boot_mark_total);

            refresh_field('boot_mark_total');
        }
    }
});





frappe.ui.form.on('Inline Stitching CT', {
    damage: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var damage_total = 0;
        frm.doc.table_11.forEach(function (d) {
            damage_total += d.damage;
        });
        if (frm.doc.status < 1) {
            frm.set_value('damage_total', damage_total);
            refresh_field('damage_total');
        }
    },


    table_11_remove: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var damage_total = 0;
        frm.doc.table_11.forEach(function (d) { damage_total += d.damage; });
        if (frm.doc.status < 1) {
            frm.set_value('damage_total', damage_total);
            refresh_field('damage_total');
        }
    }
});





frappe.ui.form.on('Inline Stitching CT', {
    wrong_direction: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var wrong_direction_total = 0;
        frm.doc.table_11.forEach(function (d) {
            wrong_direction_total += d.wrong_direction;
        });
        if (frm.doc.status < 1) {
            frm.set_value('wrong_direction_total', wrong_direction_total);
            refresh_field('wrong_direction_total');
        }
    },

    table_11_remove: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var wrong_direction_total = 0;
        frm.doc.table_11.forEach(function (d) { wrong_direction_total += d.wrong_direction; });
        if (frm.doc.status < 1) {
            frm.set_value('wrong_direction_total', wrong_direction_total);
            refresh_field('wrong_direction_total');
        }
    }
});






frappe.ui.form.on('Inline Stitching CT', {
    number_label_missing: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var number_label_missing_total = 0;
        frm.doc.table_11.forEach(function (d) {
            number_label_missing_total += d.number_label_missing;
        });
        if (frm.doc.status < 1) {
            frm.set_value('number_label_missing_total', number_label_missing_total);
            refresh_field('number_label_missing_total');
        }
    },

    table_11_remove: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var number_label_missing_total = 0;
        frm.doc.table_11.forEach(function (d) { number_label_missing_total += d.number_label_missing; });
        if (frm.doc.status < 1) {
            frm.set_value('number_label_missing_total', number_label_missing_total);
            refresh_field('number_label_missing_total');
        }
    }
});









frappe.ui.form.on('Inline Stitching CT', {
    defects_qty: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var other_defect_qty = 0;
        frm.doc.table_11.forEach(function (d) {
            other_defect_qty += d.defects_qty;
        });
        if (frm.doc.status < 1) {
            frm.set_value('other_defect_qty', other_defect_qty);
            refresh_field('other_defect_qty');
        }
    },

    table_11_remove: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var other_defect_qty = 0;
        frm.doc.table_11.forEach(function (d) { other_defect_qty += d.defects_qty; });
        if (frm.doc.status < 1) {
            frm.set_value('other_defect_qty', other_defect_qty);
            refresh_field('other_defect_qty');
        }
    }
});



frappe.ui.form.on('Inline Stitching Inspection', {




    refresh(frm) {
        if (frm.doc.status < 1) {
            frm.set_value('ds_percent', (frm.doc.double_stitch_total * 100) / frm.doc.total_number_pcs)
        }
        if (frm.doc.status < 1) {
            frm.set_value('of_percent', (frm.doc.overlap_feb_total * 100) / frm.doc.total_number_pcs)
        }
        if (frm.doc.status < 1) {
            frm.set_value('us_percent', (frm.doc.uneven_stitch_total * 100) / frm.doc.total_number_pcs)
        }
        if (frm.doc.status < 1) {
            frm.set_value('bm_percent', (frm.doc.boot_mark_total * 100) / frm.doc.total_number_pcs)
        }
        if (frm.doc.status < 1) {
            frm.set_value('od_percent', (frm.doc.other_defect_qty * 100) / frm.doc.total_number_pcs)
        }
        if (frm.doc.status < 1) {
            frm.set_value('o_seam_percent', (frm.doc.open_seam_total * 100) / frm.doc.total_number_pcs)
        }
        if (frm.doc.status < 1) {
            frm.set_value('p_percent', (frm.doc.puckering_total * 100) / frm.doc.total_number_pcs)
        }
        if (frm.doc.status < 1) {
            frm.set_value('bs_percent', (frm.doc.bad_stitch_total * 100) / frm.doc.total_number_pcs)
        }
        if (frm.doc.status < 1) {
            frm.set_value('d_percent', (frm.doc.damage_total * 100) / frm.doc.total_number_pcs)
        }
        if (frm.doc.status < 1) {
            frm.set_value('ls_percent', (frm.doc.loose_stitch_total * 100) / frm.doc.total_number_pcs)
        }
        if (frm.doc.status < 1) {
            frm.set_value('re_percent', (frm.doc.raw_edge_total * 100) / frm.doc.total_number_pcs)
        }
        if (frm.doc.status < 1) {
            frm.set_value('o_percent', (frm.doc.open_safty_total * 100) / frm.doc.total_number_pcs)
        }
        if (frm.doc.status < 1) {
            frm.set_value('wd_percent', (frm.doc.wrong_direction_total * 100) / frm.doc.total_number_pcs)
        }
        if (frm.doc.status < 1) {
            frm.set_value('os_percent', (frm.doc.oil_stain_total * 100) / frm.doc.total_number_pcs)
        }
        if (frm.doc.status < 1) {
            frm.set_value('s_percent', (frm.doc.spi_total * 100) / frm.doc.total_number_pcs)
        }
        if (frm.doc.status < 1) {
            frm.set_value('ss_percent', (frm.doc.skip_stitch_total * 100) / frm.doc.total_number_pcs)
        }
        if (frm.doc.status < 1) {
            frm.set_value('nlm_percent', (frm.doc.number_label_missing_total * 100) / frm.doc.total_number_pcs)
        }

    },
    before_Save(frm) {
        frm.set_value('defect_percentage', (frm.doc.total_defects * 100) / frm.doc.total_number_pcs);
    },
    total_number_pcs(frm) {
        frm.set_value('defect_percentage', (frm.doc.total_defects * 100) / frm.doc.total_number_pcs);
    },
    total_defects(frm) {
        frm.set_value('defect_percentage', (frm.doc.total_defects * 100) / frm.doc.total_number_pcs);
    },
});



frappe.ui.form.on('Inline Stitching CT', {
    no_of_pcs: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var total_number_pcs = 0;
        frm.doc.table_11.forEach(function (d) {
            total_number_pcs += d.no_of_pcs;
        });
        frm.set_value('total_number_pcs', total_number_pcs);
        refresh_field('total_number_pcs');
    },


    table_11_remove: function (frm, cdt, cdn) {
        var d = locals[cdt][cdn];
        var total_number_pcs = 0;
        frm.doc.table_11.forEach(function (d) { total_number_pcs += d.no_of_pcs; });
        frm.set_value('total_number_pcs', total_number_pcs);
        refresh_field('total_number_pcs');
    }
}); 