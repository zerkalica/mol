namespace $ { export class $mol_text extends $mol_list {

	/// uri_base \
	uri_base() {
		return ""
	}

	/// text \
	text() {
		return ""
	}

	/// Row!id $mol_text_row 
	/// 	sub <= block_content!id - 
	/// 	type <= block_type!id -
	@ $mol_mem_key
	Row( id : any ) {
		return (( obj )=>{
			obj.sub = () => this.block_content(id)
			obj.type = () => this.block_type(id)
			return obj
		})( new this.$.$mol_text_row )
	}

	/// block_content!id /
	block_content( id : any ) {
		return [] as any[]
	}

	/// block_type!id \
	block_type( id : any ) {
		return ""
	}

	/// Span!id $mol_text_span
	@ $mol_mem_key
	Span( id : any ) {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_text_span )
	}

	/// Link!id $mol_text_link
	@ $mol_mem_key
	Link( id : any ) {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_text_link )
	}

	/// Image!id $mol_text_image
	@ $mol_mem_key
	Image( id : any ) {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_text_image )
	}

	/// Header!id $mol_text_header 
	/// 	level <= header_level!id - 
	/// 	content <= header_content!id -
	@ $mol_mem_key
	Header( id : any ) {
		return (( obj )=>{
			obj.level = () => this.header_level(id)
			obj.content = () => this.header_content(id)
			return obj
		})( new this.$.$mol_text_header )
	}

	/// header_level!id 0
	header_level( id : any ) {
		return 0
	}

	/// header_content!id /
	header_content( id : any ) {
		return [] as any[]
	}

	/// Table!id $mol_grid 
	/// 	head_cells <= table_head_cells!id - 
	/// 	rows <= table_rows!id -
	@ $mol_mem_key
	Table( id : any ) {
		return (( obj )=>{
			obj.head_cells = () => this.table_head_cells(id)
			obj.rows = () => this.table_rows(id)
			return obj
		})( new this.$.$mol_grid )
	}

	/// table_head_cells!id /
	table_head_cells( id : any ) {
		return [] as any[]
	}

	/// table_rows!id /
	table_rows( id : any ) {
		return [] as any[]
	}

	/// Table_row!id $mol_grid_row cells <= table_cells!id -
	@ $mol_mem_key
	Table_row( id : any ) {
		return (( obj )=>{
			obj.cells = () => this.table_cells(id)
			return obj
		})( new this.$.$mol_grid_row )
	}

	/// table_cells!id /
	table_cells( id : any ) {
		return [] as any[]
	}

	/// Table_cell!id $mol_grid_cell sub <= table_cell_content!id -
	@ $mol_mem_key
	Table_cell( id : any ) {
		return (( obj )=>{
			obj.sub = () => this.table_cell_content(id)
			return obj
		})( new this.$.$mol_grid_cell )
	}

	/// table_cell_content!id /
	table_cell_content( id : any ) {
		return [] as any[]
	}

	/// Table_cell_head!id $mol_float sub <= table_cell_content!id -
	@ $mol_mem_key
	Table_cell_head( id : any ) {
		return (( obj )=>{
			obj.sub = () => this.table_cell_content(id)
			return obj
		})( new this.$.$mol_float )
	}

} }

namespace $ { export class $mol_text_row extends $mol_view {

	/// minimal_height 40
	minimal_height() {
		return 40
	}

	/// attr * 
	/// 	^ 
	/// 	mol_text_type <= type -
	attr() {
		return ({
			...super.attr() ,
			"mol_text_type" :  this.type() ,
		})
	}

	/// type \
	type() {
		return ""
	}

} }

namespace $ { export class $mol_text_header extends $mol_view {

	/// dom_name \h
	dom_name() {
		return "h"
	}

	/// minimal_height 50
	minimal_height() {
		return 50
	}

	/// attr * 
	/// 	^ 
	/// 	mol_text_header_level <= level?val -
	attr() {
		return ({
			...super.attr() ,
			"mol_text_header_level" :  this.level() ,
		})
	}

	/// level?val 0
	@ $mol_mem
	level( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : 0
	}

	/// sub <= content -
	sub() {
		return this.content()
	}

	/// content /
	content() {
		return [] as any[]
	}

} }

namespace $ { export class $mol_text_span extends $mol_view {

	/// dom_name \span
	dom_name() {
		return "span"
	}

	/// attr * 
	/// 	^ 
	/// 	mol_text_type <= type?val -
	attr() {
		return ({
			...super.attr() ,
			"mol_text_type" :  this.type() ,
		})
	}

	/// type?val \
	@ $mol_mem
	type( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// sub <= content?val -
	sub() {
		return this.content()
	}

	/// content?val /
	@ $mol_mem
	content( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : [] as any[]
	}

} }

namespace $ { export class $mol_text_link extends $mol_view {

	/// dom_name \a
	dom_name() {
		return "a"
	}

	/// attr * 
	/// 	^ 
	/// 	mol_text_type <= type?val - 
	/// 	href <= link?val -
	attr() {
		return ({
			...super.attr() ,
			"mol_text_type" :  this.type() ,
			"href" :  this.link() ,
		})
	}

	/// type?val \
	@ $mol_mem
	type( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// link?val \
	@ $mol_mem
	link( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// sub <= content?val -
	sub() {
		return this.content()
	}

	/// content?val /
	@ $mol_mem
	content( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : [] as any[]
	}

} }

namespace $ { export class $mol_text_image extends $mol_view {

	/// dom_name \object
	dom_name() {
		return "object"
	}

	/// attr * 
	/// 	^ 
	/// 	mol_text_type <= type?val - 
	/// 	data <= link?val -
	attr() {
		return ({
			...super.attr() ,
			"mol_text_type" :  this.type() ,
			"data" :  this.link() ,
		})
	}

	/// type?val \
	@ $mol_mem
	type( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// link?val \
	@ $mol_mem
	link( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// sub / <= title?val -
	sub() {
		return [].concat( this.title() )
	}

	/// title?val \
	@ $mol_mem
	title( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

} }

