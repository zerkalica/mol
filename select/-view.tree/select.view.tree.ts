namespace $ { export class $mol_select extends $mol_pop {

	/// dictionary *
	dictionary() {
		return ({
		})
	}

	/// options /
	options() {
		return [] as any[]
	}

	/// value?val \
	@ $mol_mem
	value( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// minimal_height 40
	minimal_height() {
		return 40
	}

	/// Option_row!id $mol_button_minor 
	/// 	event_click?event <=> event_select!id?event - 
	/// 	sub <= option_content!id -
	@ $mol_mem_key
	Option_row( id : any ) {
		return (( obj )=>{
			obj.event_click = ( event? : any ) => this.event_select(id , event )
			obj.sub = () => this.option_content(id)
			return obj
		})( new this.$.$mol_button_minor )
	}

	/// event_select!id?event null
	@ $mol_mem_key
	event_select( id : any , event? : any , force? : $mol_atom_force ) {
		return ( event !== void 0 ) ? event : null as any
	}

	/// option_content!id / <= Option_label!id -
	option_content( id : any ) {
		return [].concat( this.Option_label(id) )
	}

	/// Option_label!id $mol_dimmer 
	/// 	minimal_height 40 
	/// 	haystack <= option_label!id - 
	/// 	needle <= filter_pattern?val -
	@ $mol_mem_key
	Option_label( id : any ) {
		return (( obj )=>{
			obj.minimal_height = () => 40
			obj.haystack = () => this.option_label(id)
			obj.needle = () => this.filter_pattern()
			return obj
		})( new this.$.$mol_dimmer )
	}

	/// option_label!id \
	option_label( id : any ) {
		return ""
	}

	/// filter_pattern?val \
	@ $mol_mem
	filter_pattern( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// No_options $mol_view sub / <= no_options_message -
	@ $mol_mem
	No_options() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.no_options_message() )
			return obj
		})( new this.$.$mol_view )
	}

	/// no_options_message @ \No options
	no_options_message() {
		return $mol_locale.text( "$mol_select_no_options_message" )
	}

	/// plugins / <= Nav -
	plugins() {
		return [].concat( this.Nav() )
	}

	/// Nav $mol_nav 
	/// 	keys_y <= nav_components - 
	/// 	current_y?component <=> option_focused?component - 
	/// 	cycle?val <=> nav_cycle?val -
	@ $mol_mem
	Nav() {
		return (( obj )=>{
			obj.keys_y = () => this.nav_components()
			obj.current_y = ( component? : any ) => this.option_focused( component )
			obj.cycle = ( val? : any ) => this.nav_cycle( val )
			return obj
		})( new this.$.$mol_nav )
	}

	/// nav_components / 
	/// 	<= Filter - 
	/// 	<= option_rows -
	nav_components() {
		return [].concat( this.Filter() , this.option_rows() )
	}

	/// option_focused?component null
	@ $mol_mem
	option_focused( component? : any , force? : $mol_atom_force ) {
		return ( component !== void 0 ) ? component : null as any
	}

	/// nav_cycle?val true
	@ $mol_mem
	nav_cycle( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : true
	}

	/// showed <= options_showed -
	showed() {
		return this.options_showed()
	}

	/// options_showed false
	options_showed() {
		return false
	}

	/// Anchor <= Trigger -
	Anchor() {
		return this.Trigger()
	}

	/// Trigger $mol_button_typed sub <= trigger_content -
	@ $mol_mem
	Trigger() {
		return (( obj )=>{
			obj.sub = () => this.trigger_content()
			return obj
		})( new this.$.$mol_button_typed )
	}

	/// trigger_content / 
	/// 	<= option_content_current - 
	/// 	<= Filter - 
	/// 	<= Trigger_icon -
	trigger_content() {
		return [].concat( this.option_content_current() , this.Filter() , this.Trigger_icon() )
	}

	/// option_content_current /
	option_content_current() {
		return [] as any[]
	}

	/// Filter $mol_string 
	/// 	value?val <=> filter_pattern?val - 
	/// 	hint <= filter_hint - 
	/// 	debounce <= debounce -
	@ $mol_mem
	Filter() {
		return (( obj )=>{
			obj.value = ( val? : any ) => this.filter_pattern( val )
			obj.hint = () => this.filter_hint()
			obj.debounce = () => this.debounce()
			return obj
		})( new this.$.$mol_string )
	}

	/// filter_hint <= hint -
	filter_hint() {
		return this.hint()
	}

	/// hint @ \Search..
	hint() {
		return $mol_locale.text( "$mol_select_hint" )
	}

	/// debounce 200
	debounce() {
		return 200
	}

	/// Trigger_icon $mol_icon_chevron
	@ $mol_mem
	Trigger_icon() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_icon_chevron )
	}

	/// bubble_content / <= Bubble_content -
	bubble_content() {
		return [].concat( this.Bubble_content() )
	}

	/// Bubble_content $mol_list rows <= option_rows -
	@ $mol_mem
	Bubble_content() {
		return (( obj )=>{
			obj.rows = () => this.option_rows()
			return obj
		})( new this.$.$mol_list )
	}

	/// option_rows /
	option_rows() {
		return [] as any[]
	}

} }

