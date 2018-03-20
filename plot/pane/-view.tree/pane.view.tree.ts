namespace $ { export class $mol_plot_pane extends $mol_svg_root {

	/// aspect \none
	aspect() {
		return "none"
	}

	/// hue_base?val NaN
	@ $mol_mem
	hue_base( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : NaN
	}

	/// hue_shift?val 111
	@ $mol_mem
	hue_shift( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : 111
	}

	/// gap 24
	gap() {
		return 24
	}

	/// gap_hor <= gap -
	gap_hor() {
		return this.gap()
	}

	/// gap_vert <= gap -
	gap_vert() {
		return this.gap()
	}

	/// gap_left <= gap_hor -
	gap_left() {
		return this.gap_hor()
	}

	/// gap_right <= gap_hor -
	gap_right() {
		return this.gap_hor()
	}

	/// gap_top <= gap_vert -
	gap_top() {
		return this.gap_vert()
	}

	/// gap_bottom <= gap_vert -
	gap_bottom() {
		return this.gap_vert()
	}

	/// shift / 
	/// 	0 
	/// 	0
	shift() {
		return [].concat( 0 , 0 )
	}

	/// scale / 
	/// 	1 
	/// 	1
	scale() {
		return [].concat( 1 , 1 )
	}

	/// size_real / 
	/// 	1 
	/// 	1
	size_real() {
		return [].concat( 1 , 1 )
	}

	/// sub <= graphs_sorted -
	sub() {
		return this.graphs_sorted()
	}

	/// graphs_sorted <= graphs_colored -
	graphs_sorted() {
		return this.graphs_colored()
	}

	/// graphs_colored <= graphs_positioned -
	graphs_colored() {
		return this.graphs_positioned()
	}

	/// graphs_positioned <= graphs -
	graphs_positioned() {
		return this.graphs()
	}

	/// graphs /
	graphs() {
		return [] as any[]
	}

	/// plugins / <= Meter -
	plugins() {
		return [].concat( this.Meter() )
	}

	width(){
		return this.Meter().width()
	}

	height(){
		return this.Meter().height()
	}

	/// Meter $mol_meter 
	/// 	width => width - 
	/// 	height => height -
	@ $mol_mem
	Meter() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_meter )
	}

} }

