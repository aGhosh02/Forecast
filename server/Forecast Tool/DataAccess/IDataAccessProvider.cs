using Forecast_Tool.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Forecast_Tool.DataAccess
{
    public interface IDataAccessProvider
    {
        void AddForecastEstimateRecord(ForecastEstimate ForecastEstimate);
        void UpdateForecastEstimateRecord(ForecastEstimate ForecastEstimate);
        void DeleteForecastEstimateRecord(int id);
        ForecastEstimate GetForecastEstimateSingleRecord(int id);
        List<ForecastEstimate> GetForecastEstimateRecords();
    }
}
