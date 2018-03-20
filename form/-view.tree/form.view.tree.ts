namespace $ { export class $mol_form extends $mol_view {

	/// submit_blocked false
	submit_blocked() {
		return false
	}

	/// sub / 
	/// 	<= Bar_fields - 
	/// 	<= Bar_buttons -
	sub() {
		return [].concat( this.Bar_fields() , this.Bar_buttons() )
	}

	/// Bar_fields $mol_view sub <= form_fields -
	@ $mol_mem
	Bar_fields() {
		return (( obj )=>{
			obj.sub = () => this.form_fields()
			return obj
		})( new this.$.$mol_view )
	}

	/// form_fields /
	form_fields() {
		return [] as any[]
	}

	/// Bar_buttons $mol_row sub <= buttons -
	@ $mol_mem
	Bar_buttons() {
		return (( obj )=>{
			obj.sub = () => this.buttons()
			return obj
		})( new this.$.$mol_row )
	}

	/// buttons /
	buttons() {
		return [] as any[]
	}

} }

