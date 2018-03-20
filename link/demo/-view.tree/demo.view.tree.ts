namespace $ { export class $mol_link_demo extends $mol_demo_small {

	/// title @ \Some hyperlinks
	title() {
		return $mol_locale.text( "$mol_link_demo_title" )
	}

	/// sub / 
	/// 	<= This - 
	/// 	<= Red - 
	/// 	<= Green - 
	/// 	<= Blue - 
	/// 	<= External -
	sub() {
		return [].concat( this.This() , this.Red() , this.Green() , this.Blue() , this.External() )
	}

	/// This $mol_link sub / <= this_label -
	@ $mol_mem
	This() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.this_label() )
			return obj
		})( new this.$.$mol_link )
	}

	/// this_label @ \This page
	this_label() {
		return $mol_locale.text( "$mol_link_demo_this_label" )
	}

	/// Red $mol_link 
	/// 	arg * color \red
	/// 	sub / <= red_label -
	@ $mol_mem
	Red() {
		return (( obj )=>{
			obj.arg = () => ({
			"color" :  "red" ,
		})
			obj.sub = () => [].concat( this.red_label() )
			return obj
		})( new this.$.$mol_link )
	}

	/// red_label @ \Red
	red_label() {
		return $mol_locale.text( "$mol_link_demo_red_label" )
	}

	/// Green $mol_link 
	/// 	arg * color \green
	/// 	sub / <= green_label -
	@ $mol_mem
	Green() {
		return (( obj )=>{
			obj.arg = () => ({
			"color" :  "green" ,
		})
			obj.sub = () => [].concat( this.green_label() )
			return obj
		})( new this.$.$mol_link )
	}

	/// green_label @ \Green
	green_label() {
		return $mol_locale.text( "$mol_link_demo_green_label" )
	}

	/// Blue $mol_link 
	/// 	arg * color \blue
	/// 	sub / <= blue_label -
	@ $mol_mem
	Blue() {
		return (( obj )=>{
			obj.arg = () => ({
			"color" :  "blue" ,
		})
			obj.sub = () => [].concat( this.blue_label() )
			return obj
		})( new this.$.$mol_link )
	}

	/// blue_label @ \Blue
	blue_label() {
		return $mol_locale.text( "$mol_link_demo_blue_label" )
	}

	/// External $mol_link 
	/// 	uri \http://example.org
	/// 	title \example.org
	/// 	hint <= external_hint -
	@ $mol_mem
	External() {
		return (( obj )=>{
			obj.uri = () => "http://example.org"
			obj.title = () => "example.org"
			obj.hint = () => this.external_hint()
			return obj
		})( new this.$.$mol_link )
	}

	/// external_hint @ \external link
	external_hint() {
		return $mol_locale.text( "$mol_link_demo_external_hint" )
	}

} }

