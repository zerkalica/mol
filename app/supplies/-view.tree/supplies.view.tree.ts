namespace $ { export class $mol_app_supplies extends $mol_book {

	/// enter $mol_app_supplies_enter entered?val <=> entered?val -
	@ $mol_mem
	enter() {
		return (( obj )=>{
			obj.entered = ( val? : any ) => this.entered( val )
			return obj
		})( new this.$.$mol_app_supplies_enter )
	}

	/// entered?val false
	@ $mol_mem
	entered( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : false
	}

	/// List $mol_app_supplies_list 
	/// 	minimal_width 400 
	/// 	supplies <= supplies - 
	/// 	search_query?val <=> supply_id?val -
	@ $mol_mem
	List() {
		return (( obj )=>{
			obj.minimal_width = () => 400
			obj.supplies = () => this.supplies()
			obj.search_query = ( val? : any ) => this.supply_id( val )
			return obj
		})( new this.$.$mol_app_supplies_list )
	}

	/// supplies /
	supplies() {
		return [] as any[]
	}

	/// supply_id?val \
	@ $mol_mem
	supply_id( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// Detail $mol_app_supplies_detail 
	/// 	minimal_width 400 
	/// 	supply <= supply - 
	/// 	event_top?val <=> event_front_up?val -
	@ $mol_mem
	Detail() {
		return (( obj )=>{
			obj.minimal_width = () => 400
			obj.supply = () => this.supply()
			obj.event_top = ( val? : any ) => this.event_front_up( val )
			return obj
		})( new this.$.$mol_app_supplies_detail )
	}

	/// supply null
	supply() {
		return null as any
	}

	/// placeholder $mol_book_placeholder title <= title -
	@ $mol_mem
	placeholder() {
		return (( obj )=>{
			obj.title = () => this.title()
			return obj
		})( new this.$.$mol_book_placeholder )
	}

} }

