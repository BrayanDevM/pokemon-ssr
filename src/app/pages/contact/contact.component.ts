import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	standalone: true,
	imports: [],
	templateUrl: './contact.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ContactComponent {}
