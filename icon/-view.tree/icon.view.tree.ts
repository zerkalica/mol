namespace $ { export class $mol_icon extends $mol_svg_root {

	/// view_box \0 0 24 24
	view_box() {
		return "0 0 24 24"
	}

	/// sub / <= Path -
	sub() {
		return [].concat( this.Path() )
	}

	/// Path $mol_svg_path geometry <= path -
	@ $mol_mem
	Path() {
		return (( obj )=>{
			obj.geometry = () => this.path()
			return obj
		})( new this.$.$mol_svg_path )
	}

	/// path \
	path() {
		return ""
	}

} }

