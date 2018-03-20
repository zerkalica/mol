namespace $ { export class $mol_app_calc extends $mol_page {

	/// current?val * 
	/// 	row 1 
	/// 	col \A
	@ $mol_mem
	current( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ({
			"row" :  1 ,
			"col" :  "A" ,
		})
	}

	/// formula!id?val \
	@ $mol_mem_key
	formula( id : any , val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// head / 
	/// 	<= Title_edit - 
	/// 	<= Tools -
	head() {
		return [].concat( this.Title_edit() , this.Tools() )
	}

	/// Title_edit $mol_string value?val <=> title?val -
	@ $mol_mem
	Title_edit() {
		return (( obj )=>{
			obj.value = ( val? : any ) => this.title( val )
			return obj
		})( new this.$.$mol_string )
	}

	/// title?val @ \Spreedsheet
	@ $mol_mem
	title( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : $mol_locale.text( "$mol_app_calc_title" )
	}

	/// tools / <= Download -
	tools() {
		return [].concat( this.Download() )
	}

	/// Download $mol_link 
	/// 	hint <= download_hint - 
	/// 	file_name <= download_file - 
	/// 	uri <= download_uri?val - 
	/// 	click?event <=> download_generate?event - 
	/// 	sub / <= Download_icon -
	@ $mol_mem
	Download() {
		return (( obj )=>{
			obj.hint = () => this.download_hint()
			obj.file_name = () => this.download_file()
			obj.uri = () => this.download_uri()
			obj.click = ( event? : any ) => this.download_generate( event )
			obj.sub = () => [].concat( this.Download_icon() )
			return obj
		})( new this.$.$mol_link )
	}

	/// download_hint @ \Download
	download_hint() {
		return $mol_locale.text( "$mol_app_calc_download_hint" )
	}

	/// download_file \
	download_file() {
		return ""
	}

	/// download_uri?val \
	@ $mol_mem
	download_uri( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// download_generate?event null
	@ $mol_mem
	download_generate( event? : any , force? : $mol_atom_force ) {
		return ( event !== void 0 ) ? event : null as any
	}

	/// Download_icon $mol_icon_load
	@ $mol_mem
	Download_icon() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_icon_load )
	}

	/// sub / 
	/// 	<= Head - 
	/// 	<= Current - 
	/// 	<= Body -
	sub() {
		return [].concat( this.Head() , this.Current() , this.Body() )
	}

	/// Current $mol_bar sub / 
	/// 	<= Pos - 
	/// 	<= Edit_current -
	@ $mol_mem
	Current() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Pos() , this.Edit_current() )
			return obj
		})( new this.$.$mol_bar )
	}

	/// Pos $mol_string 
	/// 	enabled false 
	/// 	value <= pos -
	@ $mol_mem
	Pos() {
		return (( obj )=>{
			obj.enabled = () => false
			obj.value = () => this.pos()
			return obj
		})( new this.$.$mol_string )
	}

	/// pos \
	pos() {
		return ""
	}

	/// Edit_current $mol_string
	@ $mol_mem
	Edit_current() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_string )
	}

	/// Body $mol_grid 
	/// 	col_ids <= col_ids - 
	/// 	row_ids <= row_ids - 
	/// 	head_cells <= head_cells - 
	/// 	cells!row <= cells!row -
	@ $mol_mem
	Body() {
		return (( obj )=>{
			obj.col_ids = () => this.col_ids()
			obj.row_ids = () => this.row_ids()
			obj.head_cells = () => this.head_cells()
			obj.cells = ( row : any ) => this.cells(row)
			return obj
		})( new this.$.$mol_grid )
	}

	/// col_ids /
	col_ids() {
		return [] as any[]
	}

	/// row_ids /
	row_ids() {
		return [] as any[]
	}

	/// head_cells /
	head_cells() {
		return [] as any[]
	}

	/// cells!row /
	cells( row : any ) {
		return [] as any[]
	}

	/// Edit!id $mol_string 
	/// 	hint \=
	/// 	value?val <=> formula!id?val -
	@ $mol_mem_key
	Edit( id : any ) {
		return (( obj )=>{
			obj.hint = () => "="
			obj.value = ( val? : any ) => this.formula(id , val )
			return obj
		})( new this.$.$mol_string )
	}

	/// Col_head!id $mol_float 
	/// 	dom_name \th
	/// 	horizontal false 
	/// 	sub / <= col_title!id -
	@ $mol_mem_key
	Col_head( id : any ) {
		return (( obj )=>{
			obj.dom_name = () => "th"
			obj.horizontal = () => false
			obj.sub = () => [].concat( this.col_title(id) )
			return obj
		})( new this.$.$mol_float )
	}

	/// col_title!id \
	col_title( id : any ) {
		return ""
	}

	/// Row_head!id $mol_float 
	/// 	dom_name \th
	/// 	vertical false 
	/// 	sub / <= row_title!id -
	@ $mol_mem_key
	Row_head( id : any ) {
		return (( obj )=>{
			obj.dom_name = () => "th"
			obj.vertical = () => false
			obj.sub = () => [].concat( this.row_title(id) )
			return obj
		})( new this.$.$mol_float )
	}

	/// row_title!id \
	row_title( id : any ) {
		return ""
	}

	/// Cell!id $mol_app_calc_cell 
	/// 	value <= result!id - 
	/// 	selected?val <=> selected!id?val -
	@ $mol_mem_key
	Cell( id : any ) {
		return (( obj )=>{
			obj.value = () => this.result(id)
			obj.selected = ( val? : any ) => this.selected(id , val )
			return obj
		})( new this.$.$mol_app_calc_cell )
	}

	/// result!id \
	result( id : any ) {
		return ""
	}

	/// selected!id?val false
	@ $mol_mem_key
	selected( id : any , val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : false
	}

	/// plugins / <= Nav -
	plugins() {
		return [].concat( this.Nav() )
	}

	/// Nav $mol_nav 
	/// 	mod_alt true 
	/// 	keys_x <= col_ids - 
	/// 	keys_y <= row_ids - 
	/// 	current_x?val <=> current_col?val - 
	/// 	current_y?val <=> current_row?val -
	@ $mol_mem
	Nav() {
		return (( obj )=>{
			obj.mod_alt = () => true
			obj.keys_x = () => this.col_ids()
			obj.keys_y = () => this.row_ids()
			obj.current_x = ( val? : any ) => this.current_col( val )
			obj.current_y = ( val? : any ) => this.current_row( val )
			return obj
		})( new this.$.$mol_nav )
	}

	/// current_col?val \A
	@ $mol_mem
	current_col( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : "A"
	}

	/// current_row?val 1
	@ $mol_mem
	current_row( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : 1
	}

	/// event * paste?event <=> paste?event -
	event() {
		return ({
			"paste" :  ( event? : any )=>  this.paste( event ) ,
		})
	}

	/// paste?event null
	@ $mol_mem
	paste( event? : any , force? : $mol_atom_force ) {
		return ( event !== void 0 ) ? event : null as any
	}

} }

namespace $ { export class $mol_app_calc_cell extends $mol_button {

	/// dom_name \td
	dom_name() {
		return "td"
	}

	/// sub / <= value -
	sub() {
		return [].concat( this.value() )
	}

	/// value \
	value() {
		return ""
	}

	/// attr * 
	/// 	^ 
	/// 	mol_app_calc_cell_selected <= selected?val - 
	/// 	mol_app_calc_cell_type <= type?val -
	attr() {
		return ({
			...super.attr() ,
			"mol_app_calc_cell_selected" :  this.selected() ,
			"mol_app_calc_cell_type" :  this.type() ,
		})
	}

	/// selected?val false
	@ $mol_mem
	selected( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : false
	}

	/// type?val \
	@ $mol_mem
	type( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

} }

