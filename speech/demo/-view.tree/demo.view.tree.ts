namespace $ { export class $mol_speech_demo extends $mol_demo_small {

	/// sub / 
	/// 	<= Toggle - 
	/// 	<= Message -
	sub() {
		return [].concat( this.Toggle() , this.Message() )
	}

	/// Toggle $mol_check_icon 
	/// 	Icon <= Toggle_icon - 
	/// 	checked?val <=> listening?val -
	@ $mol_mem
	Toggle() {
		return (( obj )=>{
			obj.Icon = () => this.Toggle_icon()
			obj.checked = ( val? : any ) => this.listening( val )
			return obj
		})( new this.$.$mol_check_icon )
	}

	/// Toggle_icon $mol_icon_microphone
	@ $mol_mem
	Toggle_icon() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_icon_microphone )
	}

	/// listening?val false
	@ $mol_mem
	listening( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : false
	}

	/// Message $mol_view sub / <= message -
	@ $mol_mem
	Message() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.message() )
			return obj
		})( new this.$.$mol_view )
	}

	/// message \
	message() {
		return ""
	}

} }

