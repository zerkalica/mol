namespace $ { export class $mol_plot_fill extends $mol_plot_graph {

	/// front /
	front() {
		return [] as any[]
	}

	/// sub / <= Curve -
	sub() {
		return [].concat( this.Curve() )
	}

	/// Curve $mol_svg_path geometry <= curve -
	@ $mol_mem
	Curve() {
		return (( obj )=>{
			obj.geometry = () => this.curve()
			return obj
		})( new this.$.$mol_svg_path )
	}

	/// curve \
	curve() {
		return ""
	}

	/// Sample $mol_plot_graph_sample color <= color -
	@ $mol_mem
	Sample() {
		return (( obj )=>{
			obj.color = () => this.color()
			return obj
		})( new this.$.$mol_plot_graph_sample )
	}

} }

