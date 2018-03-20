namespace $ { export class $mol_app_supplies_list extends $mol_page {

	/// supplies /
	supplies() {
		return [] as any[]
	}

	/// title @ \Supplies
	title() {
		return $mol_locale.text( "$mol_app_supplies_list_title" )
	}

	/// body / 
	/// 	<= Search_bar - 
	/// 	<= Supply_rows -
	body() {
		return [].concat( this.Search_bar() , this.Supply_rows() )
	}

	/// Search_bar $mol_float sub / <= Search -
	@ $mol_mem
	Search_bar() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Search() )
			return obj
		})( new this.$.$mol_float )
	}

	/// Search $mol_code 
	/// 	hint <= search_hint - 
	/// 	value?val <=> search_query?val -
	@ $mol_mem
	Search() {
		return (( obj )=>{
			obj.hint = () => this.search_hint()
			obj.value = ( val? : any ) => this.search_query( val )
			return obj
		})( new this.$.$mol_code )
	}

	/// search_hint @ \Search supply by bar code
	search_hint() {
		return $mol_locale.text( "$mol_app_supplies_list_search_hint" )
	}

	/// search_query?val \
	@ $mol_mem
	search_query( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// Supply_rows $mol_list rows <= supply_rows -
	@ $mol_mem
	Supply_rows() {
		return (( obj )=>{
			obj.rows = () => this.supply_rows()
			return obj
		})( new this.$.$mol_list )
	}

	/// supply_rows /
	supply_rows() {
		return [] as any[]
	}

	/// Supply_row!index $mol_app_supplies_card 
	/// 	supply <= supply!index - 
	/// 	arg <= supply_arg!index -
	@ $mol_mem_key
	Supply_row( index : any ) {
		return (( obj )=>{
			obj.supply = () => this.supply(index)
			obj.arg = () => this.supply_arg(index)
			return obj
		})( new this.$.$mol_app_supplies_card )
	}

	/// supply!index null
	supply( index : any ) {
		return null as any
	}

	/// supply_arg!index * supply <= supply_id!index -
	supply_arg( index : any ) {
		return ({
			"supply" :  this.supply_id(index) ,
		})
	}

	/// supply_id!index \
	supply_id( index : any ) {
		return ""
	}

} }

