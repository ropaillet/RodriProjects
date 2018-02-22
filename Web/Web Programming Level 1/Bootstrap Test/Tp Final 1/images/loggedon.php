
$(function() {
    var $loggedon = 0;
    var $name     = "";
    if (!$loggedon) {
        $(".hide-my-freenom").show();
    } else {
        $(".hide-my-freenom").hide();
        $(".my-freenom").show();
        $("#username").html($name);
            }
});
