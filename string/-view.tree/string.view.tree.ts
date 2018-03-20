namespace $ { export class $mol_string extends $mol_view {

	/// dom_name \input
	dom_name() {
		return "input"
	}

	/// enabled true
	enabled() {
		return true
	}

	/// debounce 200
	debounce() {
		return 200
	}

	/// minimal_height 40
	minimal_height() {
		return 40
	}

	/// field * 
	/// 	^ 
	/// 	disabled <= disabled - 
	/// 	value <= value_changed?val - 
	/// 	placeholder <= hint - 
	/// 	type <= type?val -
	field() {
		return ({
			...super.field() ,
			"disabled" :  this.disabled() ,
			"value" :  this.value_changed() ,
			"placeholder" :  this.hint() ,
			"type" :  this.type() ,
		})
	}

	/// disabled false
	disabled() {
		return false
	}

	/// value_changed?val <=> value?val -
	@ $mol_mem
	value_changed( val? : any , force? : $mol_atom_force ) {
		return this.value( val )
	}

	/// value?val \
	@ $mol_mem
	value( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// hint \
	hint() {
		return ""
	}

	/// type?val \text
	@ $mol_mem
	type( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : "text"
	}

	/// attr * 
	/// 	^ 
	/// 	maxlength <= length_max -
	attr() {
		return ({
			...super.attr() ,
			"maxlength" :  this.length_max() ,
		})
	}

	/// length_max Infinity
	length_max() {
		return Infinity
	}

	/// event * 
	/// 	^ 
	/// 	input?event <=> event_change?event - 
	/// 	keypress?event <=> event_key_press?event -
	event() {
		return ({
			...super.event() ,
			"input" :  ( event? : any )=>  this.event_change( event ) ,
			"keypress" :  ( event? : any )=>  this.event_key_press( event ) ,
		})
	}

	/// event_change?event null
	@ $mol_mem
	event_change( event? : any , force? : $mol_atom_force ) {
		return ( event !== void 0 ) ? event : null as any
	}

	/// event_key_press?event null
	@ $mol_mem
	event_key_press( event? : any , force? : $mol_atom_force ) {
		return ( event !== void 0 ) ? event : null as any
	}

} }

