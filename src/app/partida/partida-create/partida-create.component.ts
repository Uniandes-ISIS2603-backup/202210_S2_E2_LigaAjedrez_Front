import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Partida } from '../partida';
import { PartidaDetail } from '../partida-detail';
import { PartidaService } from '../partida.service';

@Component({
  selector: 'app-partida-create',
  templateUrl: './partida-create.component.html',
  styleUrls: ['./partida-create.component.css']
})
export class PartidaCreateComponent implements OnInit {

  //jugadores!: Jugador[];
  //aperturas!: Apertura[];
  partidaForm!: FormGroup;

  constructor(
    private partidaService: PartidaService,
    //private jugadorService: JugadorService,
    //private aperturaService: AperturaService,

    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router
    ) {}
  /*
  getJugadores(): void {
    this.jugadorService.getJugadores().subscribe(
      (jugadores) => {
        this.jugadores = jugadores;
      },
      (err) => {
        this.toastrService.error(err, 'Error');
      }
    );
  }

  getAperturas(): void {
    this.aperturaService.getAperturas().subscribe(
      (aperturas) => {
        this.aperturas = aperturas;
      },
      (err) => {
        this.toastrService.error(err, 'Error');
      }
    );
  }
  */
  createPartida(partida: PartidaDetail) {
    if (!this.partidaForm.valid) return;

    const torneoId = this.partidaForm.get('torneo')!.value;

    this.partidaService.createPartida(partida).subscribe(
      (p: Partida) => {
        this.toastrService.success('La partida fue creada exitosamente');
        this.partidaService.createTorneoPartida(p.id, torneoId).subscribe(
          () => {
            this.toastrService.success(
              'El torneo fue asociado exitosamente'
            );
          },
          (err: string) => {
            this.toastrService.error(err, 'Error');
          }
        );

        this.router.navigate(['/partidas/list']);
        this.partidaForm.reset();
      },
      (err: string) => {
        this.toastrService.error(err, 'Error');
      }
    );
  }

  cancelCreation(): void {
    this.toastrService.warning("La partida no fue creada", 'Partida creation');
    this.partidaForm.reset();
  }

  ngOnInit() {

    //this.getJugadores();
    //this.getAperturas();

    this.partidaForm = this.formBuilder.group({

      id: ['', [Validators.required, Validators.minLength(2)]],
      torneo: ['', [Validators.required]],
      apertura: ['', [Validators.required]],
      description: ['', [Validators.required]],
      resultado: ['', [Validators.required]],
      jugada: ['', [Validators.required]],
      jugador: ['', [Validators.required]],
      comentario: ['', [Validators.required]],

    });
  }
}
