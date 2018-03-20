namespace $ { export class $mol_pop_over extends $mol_pop {

	/// showed <= hovered?val -
	showed() {
		return this.hovered()
	}

	/// hovered?val false
	@ $mol_mem
	hovered( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : false
	}

	/// attr * 
	/// 	^ 
	/// 	tabindex 0
	attr() {
		return ({
			...super.attr() ,
			"tabindex" :  0 ,
		})
	}

	/// event * 
	/// 	^ 
	/// 	mouseenter?event <=> event_show?event - 
	/// 	mouseleave?event <=> event_hide?event -
	event() {
		return ({
			...super.event() ,
			"mouseenter" :  ( event? : any )=>  this.event_show( event ) ,
			"mouseleave" :  ( event? : any )=>  this.event_hide( event ) ,
		})
	}

	/// event_show?event null
	@ $mol_mem
	event_show( event? : any , force? : $mol_atom_force ) {
		return ( event !== void 0 ) ? event : null as any
	}

	/// event_hide?event null
	@ $mol_mem
	event_hide( event? : any , force? : $mol_atom_force ) {
		return ( event !== void 0 ) ? event : null as any
	}

} }

