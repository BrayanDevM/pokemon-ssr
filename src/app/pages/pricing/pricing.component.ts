import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	standalone: true,
	imports: [],
	templateUrl: './pricing.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PricingComponent implements OnInit {
	private title = inject(Title);
	private platform = inject(PLATFORM_ID);

	ngOnInit(): void {
		// if (isPlatformBrowser(this.platform)) {
		// 	console.log(document);
		// }
		this.title.setTitle('Pricing page');
	}
}
