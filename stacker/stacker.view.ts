namespace $.$mol {
	export class $mol_stacker extends $.$mol_stacker {

		collapse( next? : boolean ) {
			if( !this.main() ) return true
			if( this.main().length === 0 ) return true

			if($mol_window.size().width < this.breakPoint()) {
				return true;
			}

			const arg = ( next === void 0 ) ? void 0 : next ? '' : null
			return $mol_state_arg.value( this.stateKey( 'side' ) , arg ) != null
		}

	}
}
