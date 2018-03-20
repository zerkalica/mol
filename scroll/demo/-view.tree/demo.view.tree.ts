namespace $ { export class $mol_scroll_demo extends $mol_demo_large {

	/// title @ \Simple scroll pane
	title() {
		return $mol_locale.text( "$mol_scroll_demo_title" )
	}

	/// sub / <= Scroll -
	sub() {
		return [].concat( this.Scroll() )
	}

	/// Scroll $mol_scroll sub / 
	/// 	<= One - 
	/// 	<= Two - 
	/// 	<= Tree -
	@ $mol_mem
	Scroll() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.One() , this.Two() , this.Tree() )
			return obj
		})( new this.$.$mol_scroll )
	}

	/// One $mol_filler
	@ $mol_mem
	One() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_filler )
	}

	/// Two $mol_filler
	@ $mol_mem
	Two() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_filler )
	}

	/// Tree $mol_filler
	@ $mol_mem
	Tree() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_filler )
	}

} }

