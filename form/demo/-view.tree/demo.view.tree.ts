namespace $ { export class $mol_form_demo extends $mol_demo_small {

	/// sub / <= Form -
	sub() {
		return [].concat( this.Form() )
	}

	submit_blocked(){
		return this.Form().submit_blocked()
	}

	/// Form $mol_form 
	/// 	title @ \Simple sign in form
	/// 	form_fields / 
	/// 		<= loginField - 
	/// 		<= passwordField - 
	/// 	submit_blocked => submit_blocked - 
	/// 	buttons / <= submit -
	@ $mol_mem
	Form() {
		return (( obj )=>{
			obj.title = () => $mol_locale.text( "$mol_form_demo_Form" )
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

	/// loginLabel @ \Login
	loginLabel() {
		return $mol_locale.text( "$mol_form_demo_loginLabel" )
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

	/// passwordLabel @ \Password
	passwordLabel() {
		return $mol_locale.text( "$mol_form_demo_passwordLabel" )
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
	/// 	sub / <= submit_text - 
	/// 	event_click?val <=> event_submit?val - 
	/// 	disabled <= submit_blocked -
	@ $mol_mem
	submit() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.submit_text() )
			obj.event_click = ( val? : any ) => this.event_submit( val )
			obj.disabled = () => this.submit_blocked()
			return obj
		})( new this.$.$mol_button_major )
	}

	/// submit_text @ \Sign In
	submit_text() {
		return $mol_locale.text( "$mol_form_demo_submit_text" )
	}

	/// event_submit?val null
	@ $mol_mem
	event_submit( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : null as any
	}

} }

