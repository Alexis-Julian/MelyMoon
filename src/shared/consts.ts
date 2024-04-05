export const ITEM_SIZE_HEIGHT = 60 as const;

export const SectionMenuUser = [
	{ name: "Inicio" },
	{ name: "Buscar" },
	{ name: "Mensajes" },
	{ name: "Notificaciones" },
	{ name: "Perfil" },
] as const;

export const SectionMenuPost = [
	{ name: "Creacion / Inicio" },
	{ name: "Crear Publicacion" },
	{ name: "Eliminar Publicacion" },
	{ name: "Ver tus Publicaciones" },
] as const;

export const regularExpressionForEmail =
	/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
