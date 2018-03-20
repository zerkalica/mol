namespace $ { export class $mol_link_iconed_demo extends $mol_demo_small {

	/// title @ \Link with icon
	title() {
		return $mol_locale.text( "$mol_link_iconed_demo_title" )
	}

	/// sub / 
	/// 	<= Input - 
	/// 	<= Output -
	sub() {
		return [].concat( this.Input() , this.Output() )
	}

	/// Input $mol_string value?val <=> name?val -
	@ $mol_mem
	Input() {
		return (( obj )=>{
			obj.value = ( val? : any ) => this.name( val )
			return obj
		})( new this.$.$mol_string )
	}

	/// name?val \https://www.google.com/search?q=%24mol
	@ $mol_mem
	name( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : "https://www.google.com/search?q=%24mol"
	}

	/// Output $mol_link_iconed uri <= name?val -
	@ $mol_mem
	Output() {
		return (( obj )=>{
			obj.uri = () => this.name()
			return obj
		})( new this.$.$mol_link_iconed )
	}

} }

