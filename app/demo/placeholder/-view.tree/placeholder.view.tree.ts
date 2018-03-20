namespace $ { export class $mol_app_demo_placeholder extends $mol_book_placeholder {

	/// sub / <= Content -
	sub() {
		return [].concat( this.Content() )
	}

	/// Content $mol_card content / 
	/// 	<= Title - 
	/// 	<= Description - 
	/// 	<= Advantages - 
	/// 	<= Github_link -
	@ $mol_mem
	Content() {
		return (( obj )=>{
			obj.content = () => [].concat( this.Title() , this.Description() , this.Advantages() , this.Github_link() )
			return obj
		})( new this.$.$mol_card )
	}

	/// Title $mol_view sub / <= title -
	@ $mol_mem
	Title() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.title() )
			return obj
		})( new this.$.$mol_view )
	}

	/// title \$mol
	title() {
		return "$mol"
	}

	/// Description $mol_view sub / <= description -
	@ $mol_mem
	Description() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.description() )
			return obj
		})( new this.$.$mol_view )
	}

	/// description @ \Reactive micro-modular ui framework. Very simple, but very powerful! $mol has small size of code, reactive architecture, components with adaptive design, that can be easily configured.
	description() {
		return $mol_locale.text( "$mol_app_demo_placeholder_description" )
	}

	/// Advantages $mol_view sub / 
	/// 	<= Technology - 
	/// 	<= Code - 
	/// 	<= Programming -
	@ $mol_mem
	Advantages() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Technology() , this.Code() , this.Programming() )
			return obj
		})( new this.$.$mol_view )
	}

	/// Technology $mol_app_placeholder_advantage 
	/// 	image \-/mol/app/demo/placeholder/technology.svg
	/// 	title <= technology -
	@ $mol_mem
	Technology() {
		return (( obj )=>{
			obj.image = () => "-/mol/app/demo/placeholder/technology.svg"
			obj.title = () => this.technology()
			return obj
		})( new this.$.$mol_app_placeholder_advantage )
	}

	/// technology @ \Flexible adaptive interface
	technology() {
		return $mol_locale.text( "$mol_app_demo_placeholder_technology" )
	}

	/// Code $mol_app_placeholder_advantage 
	/// 	image \-/mol/app/demo/placeholder/code_rate.svg
	/// 	title <= code_rate -
	@ $mol_mem
	Code() {
		return (( obj )=>{
			obj.image = () => "-/mol/app/demo/placeholder/code_rate.svg"
			obj.title = () => this.code_rate()
			return obj
		})( new this.$.$mol_app_placeholder_advantage )
	}

	/// code_rate @ \Quick and easy development
	code_rate() {
		return $mol_locale.text( "$mol_app_demo_placeholder_code_rate" )
	}

	/// Programming $mol_app_placeholder_advantage 
	/// 	image \-/mol/app/demo/placeholder/programming.svg
	/// 	title <= programming -
	@ $mol_mem
	Programming() {
		return (( obj )=>{
			obj.image = () => "-/mol/app/demo/placeholder/programming.svg"
			obj.title = () => this.programming()
			return obj
		})( new this.$.$mol_app_placeholder_advantage )
	}

	/// programming @ \High-speed applications
	programming() {
		return $mol_locale.text( "$mol_app_demo_placeholder_programming" )
	}

	/// Github_link $mol_link_iconed uri \https://github.com/eigenmethod/mol
	@ $mol_mem
	Github_link() {
		return (( obj )=>{
			obj.uri = () => "https://github.com/eigenmethod/mol"
			return obj
		})( new this.$.$mol_link_iconed )
	}

} }

namespace $ { export class $mol_app_placeholder_advantage extends $mol_view {

	/// sub / 
	/// 	<= Image - 
	/// 	<= title -
	sub() {
		return [].concat( this.Image() , this.title() )
	}

	/// Image $mol_image uri <= image -
	@ $mol_mem
	Image() {
		return (( obj )=>{
			obj.uri = () => this.image()
			return obj
		})( new this.$.$mol_image )
	}

	/// image \
	image() {
		return ""
	}

	/// title \
	title() {
		return ""
	}

} }

