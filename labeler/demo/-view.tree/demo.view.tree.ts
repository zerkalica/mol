namespace $ { export class $mol_labeler_demo extends $mol_demo_small {

	/// title @ \Labeled content of some types
	title() {
		return $mol_locale.text( "$mol_labeler_demo_title" )
	}

	/// sub / 
	/// 	<= Provider - 
	/// 	<= Name -
	sub() {
		return [].concat( this.Provider() , this.Name() )
	}

	/// Provider $mol_labeler 
	/// 	title \Provider
	/// 	content \ACME Provider Inc.
	@ $mol_mem
	Provider() {
		return (( obj )=>{
			obj.title = () => "Provider"
			obj.content = () => "ACME Provider Inc."
			return obj
		})( new this.$.$mol_labeler )
	}

	/// Name $mol_labeler 
	/// 	title \User name
	/// 	Content <= Name_control -
	@ $mol_mem
	Name() {
		return (( obj )=>{
			obj.title = () => "User name"
			obj.Content = () => this.Name_control()
			return obj
		})( new this.$.$mol_labeler )
	}

	/// Name_control $mol_string 
	/// 	hint \Jack Sparrow
	/// 	value?val <=> user_name?val -
	@ $mol_mem
	Name_control() {
		return (( obj )=>{
			obj.hint = () => "Jack Sparrow"
			obj.value = ( val? : any ) => this.user_name( val )
			return obj
		})( new this.$.$mol_string )
	}

	/// user_name?val \
	@ $mol_mem
	user_name( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

} }

