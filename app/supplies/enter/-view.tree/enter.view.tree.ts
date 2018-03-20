namespace $ { export class $mol_app_supplies_enter extends $mol_view {

	/// entered?val false
	@ $mol_mem
	entered( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : false
	}

	/// sub / <= form -
	sub() {
		return [].concat( this.form() )
	}

	/// form $mol_form 
	/// 	form_fields / 
	/// 		<= loginField - 
	/// 		<= passwordField - 
	/// 	buttons / <= submit -
	@ $mol_mem
	form() {
		return (( obj )=>{
			obj.form_fields = () => [].concat( this.loginField() , this.passwordField() )
			obj.buttons = () => [].concat( this.submit() )
			return obj
		})( new this.$.$mol_form )
	}

	/// loginField $mol_form_field 
	/// 	name <= loginLabel - 
	/// 	errors <= loginErrors - 
	/// 	control <= loginControl -
	@ $mol_mem
	loginField() {
		return (( obj )=>{
			obj.name = () => this.loginLabel()
			obj.errors = () => this.loginErrors()
			obj.control = () => this.loginControl()
			return obj
		})( new this.$.$mol_form_field )
	}

	/// loginLabel @ \User name
	loginLabel() {
		return $mol_locale.text( "$mol_app_supplies_enter_loginLabel" )
	}

	/// loginErrors /
	loginErrors() {
		return [] as any[]
	}

	/// loginControl $mol_string value?val <=> login?val -
	@ $mol_mem
	loginControl() {
		return (( obj )=>{
			obj.value = ( val? : any ) => this.login( val )
			return obj
		})( new this.$.$mol_string )
	}

	/// login?val \
	@ $mol_mem
	login( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// passwordField $mol_form_field 
	/// 	name <= passwordLabel - 
	/// 	errors <= passwordErrors - 
	/// 	control <= passControl -
	@ $mol_mem
	passwordField() {
		return (( obj )=>{
			obj.name = () => this.passwordLabel()
			obj.errors = () => this.passwordErrors()
			obj.control = () => this.passControl()
			return obj
		})( new this.$.$mol_form_field )
	}

	/// passwordLabel @ \Pass word
	passwordLabel() {
		return $mol_locale.text( "$mol_app_supplies_enter_passwordLabel" )
	}

	/// passwordErrors /
	passwordErrors() {
		return [] as any[]
	}

	/// passControl $mol_string 
	/// 	value?val <=> password?val - 
	/// 	type \password
	@ $mol_mem
	passControl() {
		return (( obj )=>{
			obj.value = ( val? : any ) => this.password( val )
			obj.type = () => "password"
			return obj
		})( new this.$.$mol_string )
	}

	/// password?val \
	@ $mol_mem
	password( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// submit $mol_button_major 
	/// 	sub / <= submitLabel - 
	/// 	event_click?val <=> event_submit?val - 
	/// 	disabled <= submit_blocked -
	@ $mol_mem
	submit() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.submitLabel() )
			obj.event_click = ( val? : any ) => this.event_submit( val )
			obj.disabled = () => this.submit_blocked()
			return obj
		})( new this.$.$mol_button_major )
	}

	/// submitLabel @ \Log In
	submitLabel() {
		return $mol_locale.text( "$mol_app_supplies_enter_submitLabel" )
	}

	/// event_submit?val null
	@ $mol_mem
	event_submit( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : null as any
	}

	/// submit_blocked false
	submit_blocked() {
		return false
	}

} }

