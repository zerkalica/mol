namespace $ { export class $mol_app_studio extends $mol_book {

	/// value_overrided!id?val null
	@ $mol_mem_key
	value_overrided( id : any , val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : null as any
	}

	/// pages / 
	/// 	<= Preview_page - 
	/// 	<= Editor_page - 
	/// 	<= Source_page -
	pages() {
		return [].concat( this.Preview_page() , this.Editor_page() , this.Source_page() )
	}

	/// Preview_page $mol_page 
	/// 	title <= preview_title - 
	/// 	tools / 
	/// 		<= Source_link - 
	/// 		<= Edit - 
	/// 		<= tools_main - 
	/// 	body / <= Selector - 
	/// 	minimal_width 400
	@ $mol_mem
	Preview_page() {
		return (( obj )=>{
			obj.title = () => this.preview_title()
			obj.tools = () => [].concat( this.Source_link() , this.Edit() , this.tools_main() )
			obj.body = () => [].concat( this.Selector() )
			obj.minimal_width = () => 400
			return obj
		})( new this.$.$mol_page )
	}

	/// preview_title @ \Preview:
	preview_title() {
		return $mol_locale.text( "$mol_app_studio_preview_title" )
	}

	/// Source_link $mol_link 
	/// 	sub / <= Source_icon - 
	/// 	arg <= source_arg -
	@ $mol_mem
	Source_link() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Source_icon() )
			obj.arg = () => this.source_arg()
			return obj
		})( new this.$.$mol_link )
	}

	/// Source_icon $mol_icon_source
	@ $mol_mem
	Source_icon() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_icon_source )
	}

	/// source_arg * source \
	source_arg() {
		return ({
			"source" :  "" ,
		})
	}

	/// Edit $mol_link 
	/// 	sub / <= Edit_icon - 
	/// 	arg * 
	/// 		path \
	/// 		source null
	@ $mol_mem
	Edit() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Edit_icon() )
			obj.arg = () => ({
			"path" :  "" ,
			"source" :  null as any ,
		})
			return obj
		})( new this.$.$mol_link )
	}

	/// Edit_icon $mol_icon_settings
	@ $mol_mem
	Edit_icon() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_icon_settings )
	}

	/// tools_main /
	tools_main() {
		return [] as any[]
	}

	/// Selector $mol_app_studio_selector 
	/// 	sub / <= Block - 
	/// 	path?val <=> path?val -
	@ $mol_mem
	Selector() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Block() )
			obj.path = ( val? : any ) => this.path( val )
			return obj
		})( new this.$.$mol_app_studio_selector )
	}

	/// Block $mol_view
	@ $mol_mem
	Block() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_view )
	}

	/// path?val /
	@ $mol_mem
	path( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : [] as any[]
	}

	Editor_tools(){
		return this.Editor_page().Tools()
	}

	/// Editor_page $mol_page 
	/// 	plugins / <= Speech_filter - 
	/// 	title <= editor_title - 
	/// 	event_top?val <=> event_front_up?val - 
	/// 	Tools => Editor_tools - 
	/// 	head / 
	/// 		<= Crumbs - 
	/// 		<= Editor_tools - 
	/// 	tools / <= Editor_close - 
	/// 	body / 
	/// 		<= Filter - 
	/// 		<= Fields - 
	/// 	minimal_width 400
	@ $mol_mem
	Editor_page() {
		return (( obj )=>{
			obj.plugins = () => [].concat( this.Speech_filter() )
			obj.title = () => this.editor_title()
			obj.event_top = ( val? : any ) => this.event_front_up( val )
			obj.head = () => [].concat( this.Crumbs() , this.Editor_tools() )
			obj.tools = () => [].concat( this.Editor_close() )
			obj.body = () => [].concat( this.Filter() , this.Fields() )
			obj.minimal_width = () => 400
			return obj
		})( new this.$.$mol_page )
	}

	/// Speech_filter $mol_speech 
	/// 	event_catch?val <=> speech_filter?val - 
	/// 	patterns <= speech_filter_patterns -
	@ $mol_mem
	Speech_filter() {
		return (( obj )=>{
			obj.event_catch = ( val? : any ) => this.speech_filter( val )
			obj.patterns = () => this.speech_filter_patterns()
			return obj
		})( new this.$.$mol_speech )
	}

	/// speech_filter?val null
	@ $mol_mem
	speech_filter( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : null as any
	}

	/// speech_filter_patterns / \find (.+?)
	speech_filter_patterns() {
		return [].concat( "find (.+?)" )
	}

	/// editor_title @ \Properties
	editor_title() {
		return $mol_locale.text( "$mol_app_studio_editor_title" )
	}

	/// Crumbs $mol_view sub <= crumbs -
	@ $mol_mem
	Crumbs() {
		return (( obj )=>{
			obj.sub = () => this.crumbs()
			return obj
		})( new this.$.$mol_view )
	}

	/// crumbs /
	crumbs() {
		return [] as any[]
	}

	/// Editor_close $mol_link 
	/// 	sub / <= Editor_close_icon - 
	/// 	arg <= editor_close_arg -
	@ $mol_mem
	Editor_close() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Editor_close_icon() )
			obj.arg = () => this.editor_close_arg()
			return obj
		})( new this.$.$mol_link )
	}

	/// Editor_close_icon $mol_icon_cross
	@ $mol_mem
	Editor_close_icon() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_icon_cross )
	}

	/// editor_close_arg * path null
	editor_close_arg() {
		return ({
			"path" :  null as any ,
		})
	}

	/// Filter $mol_search 
	/// 	hint <= filter_hint - 
	/// 	query?val <=> prop_filter?val -
	@ $mol_mem
	Filter() {
		return (( obj )=>{
			obj.hint = () => this.filter_hint()
			obj.query = ( val? : any ) => this.prop_filter( val )
			return obj
		})( new this.$.$mol_search )
	}

	/// filter_hint @ \Filter properties
	filter_hint() {
		return $mol_locale.text( "$mol_app_studio_filter_hint" )
	}

	/// prop_filter?val \
	@ $mol_mem
	prop_filter( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// Fields $mol_list 
	/// 	rows <= fields - 
	/// 	Empty <= Prop_add -
	@ $mol_mem
	Fields() {
		return (( obj )=>{
			obj.rows = () => this.fields()
			obj.Empty = () => this.Prop_add()
			return obj
		})( new this.$.$mol_list )
	}

	/// fields /
	fields() {
		return [] as any[]
	}

	/// Prop_add $mol_button_major 
	/// 	event_click?val <=> event_add?val - 
	/// 	title <= prop_add_label -
	@ $mol_mem
	Prop_add() {
		return (( obj )=>{
			obj.event_click = ( val? : any ) => this.event_add( val )
			obj.title = () => this.prop_add_label()
			return obj
		})( new this.$.$mol_button_major )
	}

	/// event_add?val null
	@ $mol_mem
	event_add( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : null as any
	}

	/// prop_add_label @ \Add this property
	prop_add_label() {
		return $mol_locale.text( "$mol_app_studio_prop_add_label" )
	}

	/// Source_page $mol_page 
	/// 	title <= source_title - 
	/// 	minimal_width 400 
	/// 	tools / <= Source_close - 
	/// 	body / <= Source -
	@ $mol_mem
	Source_page() {
		return (( obj )=>{
			obj.title = () => this.source_title()
			obj.minimal_width = () => 400
			obj.tools = () => [].concat( this.Source_close() )
			obj.body = () => [].concat( this.Source() )
			return obj
		})( new this.$.$mol_page )
	}

	/// source_title @ \Source code
	source_title() {
		return $mol_locale.text( "$mol_app_studio_source_title" )
	}

	/// Source_close $mol_link 
	/// 	sub / <= Source_close_icon - 
	/// 	arg <= source_close_arg -
	@ $mol_mem
	Source_close() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Source_close_icon() )
			obj.arg = () => this.source_close_arg()
			return obj
		})( new this.$.$mol_link )
	}

	/// Source_close_icon $mol_icon_cross
	@ $mol_mem
	Source_close_icon() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_icon_cross )
	}

	/// source_close_arg * source null
	source_close_arg() {
		return ({
			"source" :  null as any ,
		})
	}

	/// Source $mol_text text <= source -
	@ $mol_mem
	Source() {
		return (( obj )=>{
			obj.text = () => this.source()
			return obj
		})( new this.$.$mol_text )
	}

	/// source \
	source() {
		return ""
	}

	/// Placeholder null
	Placeholder() {
		return null as any
	}

	/// Crumb!index $mol_link 
	/// 	title <= crumb_title!index - 
	/// 	arg * path <= crumb_path!index -
	@ $mol_mem_key
	Crumb( index : any ) {
		return (( obj )=>{
			obj.title = () => this.crumb_title(index)
			obj.arg = () => ({
			"path" :  this.crumb_path(index) ,
		})
			return obj
		})( new this.$.$mol_link )
	}

	/// crumb_title!index \
	crumb_title( index : any ) {
		return ""
	}

	/// crumb_path!index \
	crumb_path( index : any ) {
		return ""
	}

	/// Prop!id $mol_app_studio_field 
	/// 	path <= prop_path!id - 
	/// 	prop!path?val <=> prop_default!path?val - 
	/// 	props!name?val <=> props_all!name?val - 
	/// 	prop_arg!id <= prop_arg!id - 
	/// 	prop_value!id <= prop_value_base!id - 
	/// 	bind_options <= prop_options - 
	/// 	object_options <= view_options - 
	/// 	prop_add?val <=> prop_add?val -
	@ $mol_mem_key
	Prop( id : any ) {
		return (( obj )=>{
			obj.path = () => this.prop_path(id)
			obj.prop = ( path : any , val? : any ) => this.prop_default(path , val )
			obj.props = ( name : any , val? : any ) => this.props_all(name , val )
			obj.prop_arg = ( id : any ) => this.prop_arg(id)
			obj.prop_value = ( id : any ) => this.prop_value_base(id)
			obj.bind_options = () => this.prop_options()
			obj.object_options = () => this.view_options()
			obj.prop_add = ( val? : any ) => this.prop_add( val )
			return obj
		})( new this.$.$mol_app_studio_field )
	}

	/// prop_path!id /
	prop_path( id : any ) {
		return [] as any[]
	}

	/// prop_default!path?val $mol_tree
	@ $mol_mem_key
	prop_default( path : any , val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : (( obj )=>{
			return obj
		})( new this.$.$mol_tree )
	}

	/// props_all!name?val $mol_tree
	@ $mol_mem_key
	props_all( name : any , val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : (( obj )=>{
			return obj
		})( new this.$.$mol_tree )
	}

	/// prop_arg!id *
	prop_arg( id : any ) {
		return ({
		})
	}

	/// prop_value_base!id null
	prop_value_base( id : any ) {
		return null as any
	}

	/// prop_options /
	prop_options() {
		return [] as any[]
	}

	/// view_options /
	view_options() {
		return [] as any[]
	}

	/// prop_add?val \
	@ $mol_mem
	prop_add( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// class_name_self?val \App
	@ $mol_mem
	class_name_self( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : "App"
	}

	/// class_name_base?val \$mol_view
	@ $mol_mem
	class_name_base( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : "$mol_view"
	}

	/// class_self?val $mol_tree
	@ $mol_mem
	class_self( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : (( obj )=>{
			return obj
		})( new this.$.$mol_tree )
	}

	/// classes $mol_tree
	@ $mol_mem
	classes() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_tree )
	}

} }

namespace $ { export class $mol_app_studio_selector extends $mol_demo_large {

	/// event * 
	/// 	contextmenu?event <=> select?event - 
	/// 	dblclick?event <=> select?event -
	event() {
		return ({
			"contextmenu" :  ( event? : any )=>  this.select( event ) ,
			"dblclick" :  ( event? : any )=>  this.select( event ) ,
		})
	}

	/// select?event null
	@ $mol_mem
	select( event? : any , force? : $mol_atom_force ) {
		return ( event !== void 0 ) ? event : null as any
	}

	/// path?val /
	@ $mol_mem
	path( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : [] as any[]
	}

} }

