namespace $ { export class $mol_pop_demo extends $mol_demo_small {

	/// title @ \Pop up block with various alignment
	title() {
		return $mol_locale.text( "$mol_pop_demo_title" )
	}

	/// sub / <= Pop -
	sub() {
		return [].concat( this.Pop() )
	}

	/// Pop $mol_pop 
	/// 	Anchor <= Show - 
	/// 	showed <= showed - 
	/// 	bubble_content / <= Content -
	@ $mol_mem
	Pop() {
		return (( obj )=>{
			obj.Anchor = () => this.Show()
			obj.showed = () => this.showed()
			obj.bubble_content = () => [].concat( this.Content() )
			return obj
		})( new this.$.$mol_pop )
	}

	/// Show $mol_button_minor title <= show_text -
	@ $mol_mem
	Show() {
		return (( obj )=>{
			obj.title = () => this.show_text()
			return obj
		})( new this.$.$mol_button_minor )
	}

	/// show_text @ \?
	show_text() {
		return $mol_locale.text( "$mol_pop_demo_show_text" )
	}

	/// showed <= focused -
	showed() {
		return this.focused()
	}

	/// Content $mol_row sub / <= bubble_hint -
	@ $mol_mem
	Content() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.bubble_hint() )
			return obj
		})( new this.$.$mol_row )
	}

	/// bubble_hint @ \This is $mol_pop
	bubble_hint() {
		return $mol_locale.text( "$mol_pop_demo_bubble_hint" )
	}

} }

