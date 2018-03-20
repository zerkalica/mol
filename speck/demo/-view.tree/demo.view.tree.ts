namespace $ { export class $mol_speck_demo extends $mol_demo_small {

	/// sub / 
	/// 	<= Link - 
	/// 	<= String - 
	/// 	<= Button - 
	/// 	<= Card -
	sub() {
		return [].concat( this.Link() , this.String() , this.Button() , this.Card() )
	}

	/// Link $mol_link sub / 
	/// 	<= Link_speck - 
	/// 	<= Link_icon -
	@ $mol_mem
	Link() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Link_speck() , this.Link_icon() )
			return obj
		})( new this.$.$mol_link )
	}

	/// Link_speck $mol_speck value \β
	@ $mol_mem
	Link_speck() {
		return (( obj )=>{
			obj.value = () => "β"
			return obj
		})( new this.$.$mol_speck )
	}

	/// Link_icon $mol_icon_settings
	@ $mol_mem
	Link_icon() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_icon_settings )
	}

	/// String $mol_view sub / 
	/// 	<= String_speck - 
	/// 	<= String_field -
	@ $mol_mem
	String() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.String_speck() , this.String_field() )
			return obj
		})( new this.$.$mol_view )
	}

	/// String_speck $mol_speck value <= string_speck -
	@ $mol_mem
	String_speck() {
		return (( obj )=>{
			obj.value = () => this.string_speck()
			return obj
		})( new this.$.$mol_speck )
	}

	/// string_speck @ \new
	string_speck() {
		return $mol_locale.text( "$mol_speck_demo_string_speck" )
	}

	/// String_field $mol_string
	@ $mol_mem
	String_field() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_string )
	}

	/// Button $mol_button_minor sub / 
	/// 	<= Button_speck - 
	/// 	<= Button_icon -
	@ $mol_mem
	Button() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Button_speck() , this.Button_icon() )
			return obj
		})( new this.$.$mol_button_minor )
	}

	/// Button_speck $mol_speck value <= notification_count -
	@ $mol_mem
	Button_speck() {
		return (( obj )=>{
			obj.value = () => this.notification_count()
			return obj
		})( new this.$.$mol_speck )
	}

	/// notification_count 8
	notification_count() {
		return 8
	}

	/// Button_icon $mol_icon_menu
	@ $mol_mem
	Button_icon() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_icon_menu )
	}

	/// Card $mol_card 
	/// 	content / <= Card_speck - 
	/// 	status <= card_status -
	@ $mol_mem
	Card() {
		return (( obj )=>{
			obj.content = () => [].concat( this.Card_speck() )
			obj.status = () => this.card_status()
			return obj
		})( new this.$.$mol_card )
	}

	/// Card_speck $mol_speck
	@ $mol_mem
	Card_speck() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_speck )
	}

	/// card_status @ \Created
	card_status() {
		return $mol_locale.text( "$mol_speck_demo_card_status" )
	}

} }

