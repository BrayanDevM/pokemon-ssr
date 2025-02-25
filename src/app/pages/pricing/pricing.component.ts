import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	standalone: true,
	imports: [],
	templateUrl: './pricing.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PricingComponent implements OnInit {
	private title = inject(Title);

	ngOnInit(): void {
		this.title.setTitle('Pricing page');
	}
}
