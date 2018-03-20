namespace $ { export class $mol_calendar_demo_selection extends $mol_demo_small {

	/// title @ \Days of month 2018-01 with custom selection
	title() {
		return $mol_locale.text( "$mol_calendar_demo_selection_title" )
	}

	/// interval_config * 
	/// 	start \2018-01-10
	/// 	end \2018-01-20
	interval_config() {
		return ({
			"start" :  "2018-01-10" ,
			"end" :  "2018-01-20" ,
		})
	}

	/// sub / <= Calendar -
	sub() {
		return [].concat( this.Calendar() )
	}

	/// Calendar $mol_calendar 
	/// 	month_string <= month - 
	/// 	day_selected!day <= selected!day -
	@ $mol_mem
	Calendar() {
		return (( obj )=>{
			obj.month_string = () => this.month()
			obj.day_selected = ( day : any ) => this.selected(day)
			return obj
		})( new this.$.$mol_calendar )
	}

	/// month \2018-01
	month() {
		return "2018-01"
	}

	/// selected!day false
	selected( day : any ) {
		return false
	}

} }

