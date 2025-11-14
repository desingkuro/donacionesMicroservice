# Donaciones API (Microservicio)

Microservicio REST en Node.js + Express con arquitectura en capas (presentación, aplicación, dominio y persistencia) para gestionar un único agregado: Donacion.

## Requisitos
- Node.js >= 18

## Instalación
```bash
npm install
```

## Ejecutar en desarrollo
```bash
npm run dev
```

## Ejecutar en producción
```bash
npm start
```

## Endpoints
- POST /api/v1/donaciones
- GET /api/v1/donaciones
- GET /api/v1/donaciones/:id
- PUT /api/v1/donaciones/:id
- DELETE /api/v1/donaciones/:id

## Notas
- Persistencia en memoria (DAO Memory). Puedes reemplazarla por otra implementación manteniendo el contrato del repositorio.
- Basado en el diagrama, el modelo incluye: `idDonacion`, `idTipoDonacion`, `idDonador` y opcional `idCampania`.
# donacionesMicroservice
