/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as NotesIndexImport } from './routes/notes/index'
import { Route as NewNoteIndexImport } from './routes/new-note/index'
import { Route as ArchivedIndexImport } from './routes/archived/index'
import { Route as NotesPostIdImport } from './routes/notes/$postId'

// Create/Update Routes

const NotesIndexRoute = NotesIndexImport.update({
  id: '/notes/',
  path: '/notes/',
  getParentRoute: () => rootRoute,
} as any)

const NewNoteIndexRoute = NewNoteIndexImport.update({
  id: '/new-note/',
  path: '/new-note/',
  getParentRoute: () => rootRoute,
} as any)

const ArchivedIndexRoute = ArchivedIndexImport.update({
  id: '/archived/',
  path: '/archived/',
  getParentRoute: () => rootRoute,
} as any)

const NotesPostIdRoute = NotesPostIdImport.update({
  id: '/notes/$postId',
  path: '/notes/$postId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/notes/$postId': {
      id: '/notes/$postId'
      path: '/notes/$postId'
      fullPath: '/notes/$postId'
      preLoaderRoute: typeof NotesPostIdImport
      parentRoute: typeof rootRoute
    }
    '/archived/': {
      id: '/archived/'
      path: '/archived'
      fullPath: '/archived'
      preLoaderRoute: typeof ArchivedIndexImport
      parentRoute: typeof rootRoute
    }
    '/new-note/': {
      id: '/new-note/'
      path: '/new-note'
      fullPath: '/new-note'
      preLoaderRoute: typeof NewNoteIndexImport
      parentRoute: typeof rootRoute
    }
    '/notes/': {
      id: '/notes/'
      path: '/notes'
      fullPath: '/notes'
      preLoaderRoute: typeof NotesIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/notes/$postId': typeof NotesPostIdRoute
  '/archived': typeof ArchivedIndexRoute
  '/new-note': typeof NewNoteIndexRoute
  '/notes': typeof NotesIndexRoute
}

export interface FileRoutesByTo {
  '/notes/$postId': typeof NotesPostIdRoute
  '/archived': typeof ArchivedIndexRoute
  '/new-note': typeof NewNoteIndexRoute
  '/notes': typeof NotesIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/notes/$postId': typeof NotesPostIdRoute
  '/archived/': typeof ArchivedIndexRoute
  '/new-note/': typeof NewNoteIndexRoute
  '/notes/': typeof NotesIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/notes/$postId' | '/archived' | '/new-note' | '/notes'
  fileRoutesByTo: FileRoutesByTo
  to: '/notes/$postId' | '/archived' | '/new-note' | '/notes'
  id: '__root__' | '/notes/$postId' | '/archived/' | '/new-note/' | '/notes/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  NotesPostIdRoute: typeof NotesPostIdRoute
  ArchivedIndexRoute: typeof ArchivedIndexRoute
  NewNoteIndexRoute: typeof NewNoteIndexRoute
  NotesIndexRoute: typeof NotesIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  NotesPostIdRoute: NotesPostIdRoute,
  ArchivedIndexRoute: ArchivedIndexRoute,
  NewNoteIndexRoute: NewNoteIndexRoute,
  NotesIndexRoute: NotesIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/notes/$postId",
        "/archived/",
        "/new-note/",
        "/notes/"
      ]
    },
    "/notes/$postId": {
      "filePath": "notes/$postId.tsx"
    },
    "/archived/": {
      "filePath": "archived/index.tsx"
    },
    "/new-note/": {
      "filePath": "new-note/index.tsx"
    },
    "/notes/": {
      "filePath": "notes/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
