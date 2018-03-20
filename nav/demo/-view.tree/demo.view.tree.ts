namespace $ { export class $mol_nav_demo extends $mol_demo_small {

	/// title @ \Keyboard navigation demo
	title() {
		return $mol_locale.text( "$mol_nav_demo_title" )
	}

	/// sub / <= Labeler -
	sub() {
		return [].concat( this.Labeler() )
	}

	/// Labeler $mol_labeler 
	/// 	title \Focus me and navigate (arrows up & down)!
	/// 	content / <= Button - 
	/// 	plugins / <= Nav -
	@ $mol_mem
	Labeler() {
		return (( obj )=>{
			obj.title = () => "Focus me and navigate (arrows up & down)!"
			obj.content = () => [].concat( this.Button() )
			obj.plugins = () => [].concat( this.Nav() )
			return obj
		})( new this.$.$mol_labeler )
	}

	/// Button $mol_button_minor title?val <= selected_item?val -
	@ $mol_mem
	Button() {
		return (( obj )=>{
			obj.title = ( val? : any ) => this.selected_item()
			return obj
		})( new this.$.$mol_button_minor )
	}

	/// selected_item?val \Click!
	@ $mol_mem
	selected_item( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : "Click!"
	}

	/// Nav $mol_nav 
	/// 	keys_y <= items - 
	/// 	current_y?val <=> selected_item?val -
	@ $mol_mem
	Nav() {
		return (( obj )=>{
			obj.keys_y = () => this.items()
			obj.current_y = ( val? : any ) => this.selected_item( val )
			return obj
		})( new this.$.$mol_nav )
	}

	/// items / 
	/// 	\Item 1
	/// 	\Item 2
	/// 	\Item 3
	/// 	\Item 4
	/// 	\Item 5
	/// 	\Item 6
	/// 	\Item 7
	items() {
		return [].concat( "Item 1" , "Item 2" , "Item 3" , "Item 4" , "Item 5" , "Item 6" , "Item 7" )
	}

} }

