namespace $ { export class $mol_attach_demo extends $mol_demo_small {

	/// title @ \Attach files an show them
	title() {
		return $mol_locale.text( "$mol_attach_demo_title" )
	}

	/// sub / 
	/// 	<= Empty - 
	/// 	<= Filled -
	sub() {
		return [].concat( this.Empty() , this.Filled() )
	}

	/// Empty $mol_attach items?val <=> empty_items?val -
	@ $mol_mem
	Empty() {
		return (( obj )=>{
			obj.items = ( val? : any ) => this.empty_items( val )
			return obj
		})( new this.$.$mol_attach )
	}

	/// empty_items?val /
	@ $mol_mem
	empty_items( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : [] as any[]
	}

	/// Filled $mol_attach items?val <=> filled_items?val -
	@ $mol_mem
	Filled() {
		return (( obj )=>{
			obj.items = ( val? : any ) => this.filled_items( val )
			return obj
		})( new this.$.$mol_attach )
	}

	/// filled_items?val / 
	/// 	<= Item1 - 
	/// 	<= Item2 - 
	/// 	<= Item3 -
	@ $mol_mem
	filled_items( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : [].concat( this.Item1() , this.Item2() , this.Item3() )
	}

	/// Item1 $mol_attach_item 
	/// 	url_thumb \logo/logo.svg
	/// 	url_load \logo/logo.svg
	@ $mol_mem
	Item1() {
		return (( obj )=>{
			obj.url_thumb = () => "logo/logo.svg"
			obj.url_load = () => "logo/logo.svg"
			return obj
		})( new this.$.$mol_attach_item )
	}

	/// Item2 $mol_attach_item 
	/// 	url_thumb \logo/logo.svg
	/// 	url_load \logo/logo.svg
	@ $mol_mem
	Item2() {
		return (( obj )=>{
			obj.url_thumb = () => "logo/logo.svg"
			obj.url_load = () => "logo/logo.svg"
			return obj
		})( new this.$.$mol_attach_item )
	}

	/// Item3 $mol_attach_item 
	/// 	url_thumb \logo/logo.svg
	/// 	url_load \logo/logo.svg
	@ $mol_mem
	Item3() {
		return (( obj )=>{
			obj.url_thumb = () => "logo/logo.svg"
			obj.url_load = () => "logo/logo.svg"
			return obj
		})( new this.$.$mol_attach_item )
	}

} }

