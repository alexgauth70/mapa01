// Aggregates

// Color

// Conditionals
function fnc_coalesce(values, context) {
    for (i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            return values[i];
        }
        
    }
    return 'ERROR';
};

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.log10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return false;
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return false;
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return false;
};

function fnc_ceil(values, context) {
    return false;
};

function fnc_pi(values, context) {
    return false;
};

function fnc_to_int(values, context) {
    return false;
};

function fnc_to_real(values, context) {
    return false;
};

function fnc_to_string(values, context) {
    return false;
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return false;
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    return false;
};

function fnc_title(values, context) {
    return false;
};

function fnc_trim(values, context) {
    return false;
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    return false;
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    return false;
};

function fnc_regexp_substr(values, context) {
    return false;
};

function fnc_substr(values, context) {
    return false;
};

function fnc_concat(values, context) {
    return false;
};

function fnc_strpos(values, context) {
    return false;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_PGOMClassificaci_2rule0_eval_expression(context) {
    // C_CLAS_MUC = 'SUC'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_CLAS_MUC']  == 'SUC');
    } else {
        return (feature['C_CLAS_MUC']  == 'SUC');
    }
}


function exp_PGOMClassificaci_2rule1_eval_expression(context) {
    // C_CLAS_MUC = 'SNC'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_CLAS_MUC']  == 'SNC');
    } else {
        return (feature['C_CLAS_MUC']  == 'SNC');
    }
}


function exp_PGOMClassificaci_2rule2_eval_expression(context) {
    // C_CLAS_MUC = 'SUD'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_CLAS_MUC']  == 'SUD');
    } else {
        return (feature['C_CLAS_MUC']  == 'SUD');
    }
}


function exp_PGOMClassificaci_2rule3_eval_expression(context) {
    // C_CLAS_MUC = 'SND'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_CLAS_MUC']  == 'SND');
    } else {
        return (feature['C_CLAS_MUC']  == 'SND');
    }
}


function exp_PGOMClassificaci_2rule4_eval_expression(context) {
    // C_CLAS_MUC = 'SNU'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_CLAS_MUC']  == 'SNU');
    } else {
        return (feature['C_CLAS_MUC']  == 'SNU');
    }
}


function exp_PGOMQualificacio_3rule0_eval_expression(context) {
    // C_QUAL_MUC = 'A2'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_QUAL_MUC']  == 'A2');
    } else {
        return (feature['C_QUAL_MUC']  == 'A2');
    }
}


function exp_PGOMQualificacio_3rule1_eval_expression(context) {
    // C_QUAL_MUC = 'D1'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_QUAL_MUC']  == 'D1');
    } else {
        return (feature['C_QUAL_MUC']  == 'D1');
    }
}


function exp_PGOMQualificacio_3rule2_eval_expression(context) {
    // C_QUAL_MUC = 'D2'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_QUAL_MUC']  == 'D2');
    } else {
        return (feature['C_QUAL_MUC']  == 'D2');
    }
}


function exp_PGOMQualificacio_3rule3_eval_expression(context) {
    // C_QUAL_MUC = 'D5'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_QUAL_MUC']  == 'D5');
    } else {
        return (feature['C_QUAL_MUC']  == 'D5');
    }
}


function exp_PGOMQualificacio_3rule4_eval_expression(context) {
    // C_QUAL_MUC = 'M1'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_QUAL_MUC']  == 'M1');
    } else {
        return (feature['C_QUAL_MUC']  == 'M1');
    }
}


function exp_PGOMQualificacio_3rule5_eval_expression(context) {
    // C_QUAL_MUC = 'M2'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_QUAL_MUC']  == 'M2');
    } else {
        return (feature['C_QUAL_MUC']  == 'M2');
    }
}


function exp_PGOMQualificacio_3rule6_eval_expression(context) {
    // C_QUAL_MUC = 'N1'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_QUAL_MUC']  == 'N1');
    } else {
        return (feature['C_QUAL_MUC']  == 'N1');
    }
}


function exp_PGOMQualificacio_3rule7_eval_expression(context) {
    // C_QUAL_MUC = 'N2'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_QUAL_MUC']  == 'N2');
    } else {
        return (feature['C_QUAL_MUC']  == 'N2');
    }
}


function exp_PGOMQualificacio_3rule8_eval_expression(context) {
    // C_QUAL_MUC = 'R1'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_QUAL_MUC']  == 'R1');
    } else {
        return (feature['C_QUAL_MUC']  == 'R1');
    }
}


function exp_PGOMQualificacio_3rule9_eval_expression(context) {
    // C_QUAL_MUC = 'R2'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_QUAL_MUC']  == 'R2');
    } else {
        return (feature['C_QUAL_MUC']  == 'R2');
    }
}


function exp_PGOMQualificacio_3rule10_eval_expression(context) {
    // C_QUAL_MUC = 'R4'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_QUAL_MUC']  == 'R4');
    } else {
        return (feature['C_QUAL_MUC']  == 'R4');
    }
}


function exp_PGOMQualificacio_3rule11_eval_expression(context) {
    // C_QUAL_MUC = 'R6'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_QUAL_MUC']  == 'R6');
    } else {
        return (feature['C_QUAL_MUC']  == 'R6');
    }
}


function exp_PGOMQualificacio_3rule12_eval_expression(context) {
    // C_QUAL_MUC = 'SC'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_QUAL_MUC']  == 'SC');
    } else {
        return (feature['C_QUAL_MUC']  == 'SC');
    }
}


function exp_PGOMQualificacio_3rule13_eval_expression(context) {
    // C_QUAL_MUC = 'SE'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_QUAL_MUC']  == 'SE');
    } else {
        return (feature['C_QUAL_MUC']  == 'SE');
    }
}


function exp_PGOMQualificacio_3rule14_eval_expression(context) {
    // C_QUAL_MUC = 'SF'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_QUAL_MUC']  == 'SF');
    } else {
        return (feature['C_QUAL_MUC']  == 'SF');
    }
}


function exp_PGOMQualificacio_3rule15_eval_expression(context) {
    // C_QUAL_MUC = 'SS'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_QUAL_MUC']  == 'SS');
    } else {
        return (feature['C_QUAL_MUC']  == 'SS');
    }
}


function exp_PGOMQualificacio_3rule16_eval_expression(context) {
    // C_QUAL_MUC = 'ST'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_QUAL_MUC']  == 'ST');
    } else {
        return (feature['C_QUAL_MUC']  == 'ST');
    }
}


function exp_PGOMQualificacio_3rule17_eval_expression(context) {
    // C_QUAL_MUC = 'SV'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_QUAL_MUC']  == 'SV');
    } else {
        return (feature['C_QUAL_MUC']  == 'SV');
    }
}


function exp_PGOMQualificacio_3rule18_eval_expression(context) {
    // C_QUAL_MUC = 'SX1'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_QUAL_MUC']  == 'SX1');
    } else {
        return (feature['C_QUAL_MUC']  == 'SX1');
    }
}


function exp_PGOMQualificacio_3rule19_eval_expression(context) {
    // C_QUAL_MUC = 'SX2'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_QUAL_MUC']  == 'SX2');
    } else {
        return (feature['C_QUAL_MUC']  == 'SX2');
    }
}


function exp_PGOMQualificacio_3rule20_eval_expression(context) {
    // C_QUAL_MUC = 'SX3'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['C_QUAL_MUC']  == 'SX3');
    } else {
        return (feature['C_QUAL_MUC']  == 'SX3');
    }
}