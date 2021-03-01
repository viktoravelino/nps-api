import { EntityRepository, Repository } from "typeorm";
import { SurveyUser } from "../models/SurveyUser";

@EntityRepository(SurveyUser)
class SurveysUsesRepository extends Repository<SurveyUser> {}

export { SurveysUsesRepository };
