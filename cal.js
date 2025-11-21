const d = $("#display");

const add = x => d.val(d.val() + x);
const clr = () => d.val('');
const calc = () => d.val( eval(d.val()) );
