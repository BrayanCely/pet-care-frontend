import { Component } from '@angular/core';

interface Veterinaria {
  nombre: string;
  barrio: string;
  direccion: string;
  descripcion: string;
}

interface Ciudad {
  nombre: string;
  departamento: string;
  veterinarias: Veterinaria[];
}

@Component({
  selector: 'app-veterinarias',
  imports: [],
  templateUrl: './veterinarias.html',
  styleUrl: './veterinarias.css',
})
export class Veterinarias {
  ciudades: Ciudad[] = [
    {
      nombre: 'Bogotá',
      departamento: 'Cundinamarca',
      veterinarias: [
        {
          nombre: 'Clínica Veterinaria Huellas',
          barrio: 'Chapinero',
          direccion: 'Calle 63 # 9-45',
          descripcion: 'Consulta general, vacunación y cirugías programadas. Atención con cita previa.',
        },
        {
          nombre: 'Centro Animal Patitas Felices',
          barrio: 'Usaquén',
          direccion: 'Carrera 7 # 119-20',
          descripcion: 'Medicina preventiva, desparasitación y control de peso para perros y gatos.',
                 },
        {
          nombre: 'Hospital Veterinario Bigotes',
          barrio: 'Teusaquillo',
          direccion: 'Carrera 24 # 39-15',
          descripcion: 'Urgencias 24 horas, hospitalización y laboratorio clínico propio.',
        },
      ],
    },
    {
      nombre: 'Medellín',
      departamento: 'Antioquia',
      veterinarias: [
        {
          nombre: 'Clínica Veterinaria Montaña',
          barrio: 'El Poblado',
          direccion: 'Carrera 43A # 14-20',
          descripcion: 'Medicina general, dermatología y plan de vacunación completo.',
        },
        {
          nombre: 'Centro Animal Laureles',
          barrio: 'Laureles',
          direccion: 'Circular 4 # 70-35',
          descripcion: 'Peluquería canina, baño medicado y consulta preventiva.',
        },
        {
          nombre: 'Veterinaria Amigos de Belén',
          barrio: 'Belén',
          direccion: 'Calle 30A # 76-18',
          descripcion: 'Esterilizaciones, jornadas de vacunación y precios accesibles.',
        },
      ],
    },
    {
      nombre: 'Cali',
      departamento: 'Valle del Cauca',
      veterinarias: [
        {
          nombre: 'Clínica Animal San Fernando',
          barrio: 'San Fernando',
          direccion: 'Calle 5 # 38-12',
          descripcion: 'Urgencias, cirugía general y ecografías para perros y gatos.',
        },
        {
          nombre: 'Veterinaria Patas del Valle',
          barrio: 'Granada',
          direccion: 'Avenida 9N # 14-40',
          descripcion: 'Consulta especializada en gatos y guardería de día.',
        },
        {
          nombre: 'Centro Veterinario Ciudad Jardín',
          barrio: 'Ciudad Jardín',
          direccion: 'Carrera 100 # 14-25',
          descripcion: 'Odontología veterinaria, rayos X y planes anuales de salud.',
        },
      ],
    },
    {
      nombre: 'Barranquilla',
      departamento: 'Atlántico',
      veterinarias: [
        {
          nombre: 'Clínica Veterinaria El Prado',
          barrio: 'El Prado',
          direccion: 'Carrera 54 # 68-30',
          descripcion: 'Medicina interna, vacunación y control de parásitos.',
        },
        {
          nombre: 'Centro Animal Alto Prado',
          barrio: 'Alto Prado',
          direccion: 'Calle 79 # 56-14',
          descripcion: 'Hospitalización, laboratorio y atención de urgencias.',
        },
        {
          nombre: 'Veterinaria Costa Mascota',
          barrio: 'Riomar',
          direccion: 'Carrera 51B # 98-22',
          descripcion: 'Peluquería, hotel para mascotas y tienda de accesorios.',
        },
      ],
    },
    {
      nombre: 'Cartagena',
      departamento: 'Bolívar',
      veterinarias: [
        {
          nombre: 'Clínica Veterinaria Bocagrande',
          barrio: 'Bocagrande',
          direccion: 'Avenida San Martín # 9-45',
          descripcion: 'Consulta general, vacunas y certificados de salud para viajar.',
        },
        {
          nombre: 'Centro Animal Manga',
          barrio: 'Manga',
          direccion: 'Calle 25 # 24-18',
          descripcion: 'Cirugías programadas, ecografías y seguimiento de mascotas adultas.',
        },
        {
          nombre: 'Veterinaria Patas del Caribe',
          barrio: 'Getsemaní',
          direccion: 'Calle del Guerrero # 29-30',
          descripcion: 'Baño y peluquería, desparasitación y consulta a domicilio.',
        },
      ],
    },
    {
      nombre: 'Bucaramanga',
      departamento: 'Santander',
      veterinarias: [
        {
          nombre: 'Clínica Veterinaria Cabecera',
          barrio: 'Cabecera del Llano',
          direccion: 'Carrera 33 # 48-20',
          descripcion: 'Medicina preventiva, vacunación y consulta con cita previa.',
        },
        {
          nombre: 'Centro Animal Cañaveral',
          barrio: 'Cañaveral',
          direccion: 'Calle 30 # 26-15',
          descripcion: 'Urgencias, hospitalización y laboratorio clínico.',
        },
        {
          nombre: 'Veterinaria Amigos de San Francisco',
          barrio: 'San Francisco',
          direccion: 'Carrera 21 # 36-40',
          descripcion: 'Esterilizaciones, control de peso y jornadas de adopción.',
        },
      ],
    },
  ];
}