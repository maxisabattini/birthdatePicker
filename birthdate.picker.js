var BirthdatePicker = function(elem, options) {
    var self=this;
    self.options = {
		class : 'birthdatePicker',
        monthsNames : {
            1 : 'January',
            2 : 'February',
            3 : 'March',
            4 : 'April',
            5 : 'May',
            6 : 'June',
            7 : 'July',
            8 : 'August',
            9 : 'September',
            10: 'October',
            11: 'November',
            12: 'December'
        },
        minYear : 1920,
        maxYear : (new Date().getFullYear()),
		dateFormat : "yyyy-mm-dd",
		visualDateFormat : "m-d-y"
    };   
    self.currentMonth = 0;
    self.currentYear = '0000';
    self.currentDay = 0;
    
    self.element = $(elem);
    self.option = $.extend( this.options, options );

    var updateField = function() {
        function pad(n){return n<10 ? '0'+n : n}

//        var sval = self.currentYear + "-" + pad(self.currentDay) + "-" + pad(self.currentMonth);
        var sval = self.currentYear + "-" + pad(self.currentMonth) + "-" + pad(self.currentDay);

        self.element.val(sval);
    };
    
    var createMonths = function() {
        var selectBox = $("<select>");
        for( var i in self.options.monthsNames ) {
            var opt = $("<option>").text(self.options.monthsNames[i]).val(i);
            selectBox.append(opt);
        }
        selectBox.insertAfter( self.element );
        selectBox.addClass(self.options.class);
        selectBox.change(function(){
            self.currentMonth = this.value;
            updateField();
        });  
    };
    var createDays = function() {
        var selectBox = $("<select>");
        for( var i=1; i<32; i++) {
            var opt = $("<option>").text(i).val(i);
            selectBox.append(opt);
        }
        selectBox.insertAfter( self.element );
        selectBox.addClass(self.options.class);
        selectBox.change(function(){
            self.currentDay = this.value;
            updateField();
        });
    };
    var createYears = function() {
        var selectBox = $("<select>");
        for( var i= self.options.minYear; i<= self.options.maxYear; i++) {
            var opt = $("<option>").text(i).val(i);
            selectBox.append(opt);
        }
        selectBox.insertAfter( self.element );
        selectBox.addClass(self.options.class);
        selectBox.change(function(){
            self.currentYear = this.value;
            updateField();
        });
    };
    createYears();
    createDays();
    createMonths();
    
    updateField();    
}
