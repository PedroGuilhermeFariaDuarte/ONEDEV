import { Express } from "express"
import { HttpBase } from "http"

interface IHttp<I> extends HttpBase { }

export interface IHttpBase extends IHttp<Express> { }
