interface Window {
	cordova : any
}

namespace $ {
	
	export let startRenderTime : number;
	
	export let renderCounter = new $mol_atom('renderCounter', (next? : number) => {
		let defer = requestAnimationFrame(() => {
			renderCounter.value(renderCounter.value() + 1);
		});
		return next || 0;
	});

	/// Autoattach view roots to loaded DOM.
	document.addEventListener( window.cordova ? 'deviceready' : 'DOMContentLoaded' , event => {
			
		const nodes = document.querySelectorAll( '[mol_viewer_root]' )
		
		for( let i = nodes.length - 1 ; i >= 0 ; --i ) {
			let view = (<any>$)[ nodes.item( i ).getAttribute( 'mol_viewer_root' ) ].root( i )
			view.DOMNode( nodes.item( i ) )
			let win = new $mol_atom( `$mol_viewer.root(${ i })` , () => {
				startRenderTime = Date.now();
				view.DOMTree()
				document.title = view.title()
				return null
			} )
			new $mol_defer( () => win.get() )
		}
		
		$mol_defer.run()
	} )
	
}
