$('#percent1').on('change', function() {
    var val = parseInt($(this).val());
    // var $circle = document.getElementsByName('code1');
    var $circle = $('#SOIL_moisture #svg #bar');
    if (isNaN(val)) {
        val = 100;
    } else {
        var r = $circle.attr('r');
        var c = Math.PI * (r * 2);

        if (val < 0) {
            val = 0;
        }
        if (val > 100) {
            val = 100;
        }

        var pct = ((100 - val) / 100) * c;
        $circle.css({ strokeDashoffset: pct });
        $('#SOIL_moisture #cont').attr('data-pct', val);
    }
});
$('#percent2').on('change', function() {
    var val = parseInt($(this).val());
    var $circle = $('#Air_humidity #svg #bar');

    if (isNaN(val)) {
        val = 100;
    } else {
        var r = $circle.attr('r');
        var c = Math.PI * (r * 2);

        if (val < 0) {
            val = 0;
        }
        if (val > 100) {
            val = 100;
        }

        var pct = ((100 - val) / 100) * c;

        $circle.css({ strokeDashoffset: pct });

        $('#Air_humidity #cont').attr('data-pct', val);
    }
});
$('#percent3').on('change', function() {
    var val = parseInt($(this).val());
    var $circle = $('#tempurature #svg #bar');

    if (isNaN(val)) {
        val = 100;
    } else {
        var r = $circle.attr('r');
        var c = Math.PI * (r * 2);

        if (val < 0) {
            val = 0;
        }
        if (val > 100) {
            val = 100;
        }

        var pct = ((100 - val) / 100) * c;

        $circle.css({ strokeDashoffset: pct });

        $('#tempurature #cont').attr('data-pct', val);
    }
});
$('#percent4').on('change', function() {
    var val = parseInt($(this).val());
    var $circle = $('#light #svg #bar');

    if (isNaN(val)) {
        val = 100;
    } else {
        var r = $circle.attr('r');
        var c = Math.PI * (r * 2);

        if (val < 0) {
            val = 0;
        }
        if (val > 100) {
            val = 100;
        }

        var pct = ((100 - val) / 100) * c;

        $circle.css({ strokeDashoffset: pct });

        $('#light #cont').attr('data-pct', val);
    }
});