namespace $ { export class $mol_book extends $mol_view {

	/// sub <= pages_wrapped -
	sub() {
		return this.pages_wrapped()
	}

	/// pages_wrapped /
	pages_wrapped() {
		return [] as any[]
	}

	/// pages /
	pages() {
		return [] as any[]
	}

	/// plugins / 
	/// 	<= Meter - 
	/// 	<= Touch -
	plugins() {
		return [].concat( this.Meter() , this.Touch() )
	}

	width(){
		return this.Meter().width()
	}

	/// Meter $mol_meter width => width -
	@ $mol_mem
	Meter() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_meter )
	}

	/// Touch $mol_touch 
	/// 	swipe_from_left?val <=> event_front_up?val - 
	/// 	swipe_to_left?val <=> event_front_down?val -
	@ $mol_mem
	Touch() {
		return (( obj )=>{
			obj.swipe_from_left = ( val? : any ) => this.event_front_up( val )
			obj.swipe_to_left = ( val? : any ) => this.event_front_down( val )
			return obj
		})( new this.$.$mol_touch )
	}

	/// event_front_up?val null
	@ $mol_mem
	event_front_up( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : null as any
	}

	/// event_front_down?val null
	@ $mol_mem
	event_front_down( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : null as any
	}

	/// Page!index $mol_book_page 
	/// 	Sub <= page!index - 
	/// 	visible <= page_visible!index -
	@ $mol_mem_key
	Page( index : any ) {
		return (( obj )=>{
			obj.Sub = () => this.page(index)
			obj.visible = () => this.page_visible(index)
			return obj
		})( new this.$.$mol_book_page )
	}

	/// page!index null
	page( index : any ) {
		return null as any
	}

	/// page_visible!index true
	page_visible( index : any ) {
		return true
	}

	/// Placeholder $mol_book_placeholder title <= title -
	@ $mol_mem
	Placeholder() {
		return (( obj )=>{
			obj.title = () => this.title()
			return obj
		})( new this.$.$mol_book_placeholder )
	}

} }

namespace $ { export class $mol_book_placeholder extends $mol_scroll {

	/// minimal_width 400
	minimal_width() {
		return 400
	}

	/// attr * 
	/// 	^ 
	/// 	tabindex null
	attr() {
		return ({
			...super.attr() ,
			"tabindex" :  null as any ,
		})
	}

	/// sub / <= title -
	sub() {
		return [].concat( this.title() )
	}

} }

namespace $ { export class $mol_book_page extends $mol_ghost {

	/// attr * 
	/// 	^ 
	/// 	tabindex 0 
	/// 	mol_book_page_focused <= focused - 
	/// 	mol_book_page_visible <= visible -
	attr() {
		return ({
			...super.attr() ,
			"tabindex" :  0 ,
			"mol_book_page_focused" :  this.focused() ,
			"mol_book_page_visible" :  this.visible() ,
		})
	}

	/// visible true
	visible() {
		return true
	}

} }

