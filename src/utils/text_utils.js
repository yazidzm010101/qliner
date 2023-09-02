import React from "react";

export function commify(number, prefix, is_dot_delimiter) {
    var number_str = String(number);
    var decimal_str = number_str.split(/\./g)[1] || "";

    var delimiter = is_dot_delimiter ? "." : ",";
    var decimal_delimiter = is_dot_delimiter ? "," : ".";

    var expr = new RegExp("\\B(?=(\\d{3})+(?!\\d))", "g");

    number_str = number_str.replace(expr, delimiter);

    if (!!prefix) {
        number_str = prefix + " " + number_str;
    }

    if (!!decimal_str) {
        number_str += decimal_delimiter + Number(decimal_str).toFixed(2);
    }

    return number_str;
}
