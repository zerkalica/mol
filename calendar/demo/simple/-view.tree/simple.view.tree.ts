namespace $ { export class $mol_calendar_demo_simple extends $mol_demo_small {

	/// title @ \Days of curret month
	title() {
		return $mol_locale.text( "$mol_calendar_demo_simple_title" )
	}

	/// sub / <= Calendar -
	sub() {
		return [].concat( this.Calendar() )
	}

	/// Calendar $mol_calendar month_moment <= today -
	@ $mol_mem
	Calendar() {
		return (( obj )=>{
			obj.month_moment = () => this.today()
			return obj
		})( new this.$.$mol_calendar )
	}

	/// today $mol_time_moment
	@ $mol_mem
	today() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_time_moment )
	}

} }

