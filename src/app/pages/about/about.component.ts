import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
	standalone: true,
	imports: [],
	templateUrl: './about.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AboutComponent implements OnInit {
	private title = inject(Title);
	private meta = inject(Meta);

	ngOnInit(): void {
		this.title.setTitle('About page');
		this.meta.updateTag({ name: 'description', content: 'Este es mi about page' });
		this.meta.updateTag({ name: 'og:title', content: 'About Page' });
		this.meta.updateTag({ name: 'keyboards', content: 'Hola,Mundo,Brayan,Devia,Curso,Angular,Pro' });
	}
}
