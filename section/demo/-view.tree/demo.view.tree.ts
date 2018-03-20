namespace $ { export class $mol_section_demo extends $mol_demo_large {

	/// title @ \Section with header
	title() {
		return $mol_locale.text( "$mol_section_demo_title" )
	}

	/// sub / <= Section -
	sub() {
		return [].concat( this.Section() )
	}

	/// Section $mol_section 
	/// 	head \Section header
	/// 	Content $mol_filler
	@ $mol_mem
	Section() {
		return (( obj )=>{
			obj.head = () => "Section header"
			obj.Content = () => (( obj )=>{
			return obj
		})( new this.$.$mol_filler )
			return obj
		})( new this.$.$mol_section )
	}

} }

