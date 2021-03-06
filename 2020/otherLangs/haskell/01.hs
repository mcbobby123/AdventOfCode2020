import Control.Monad ()

main :: IO ()
main = do
  contents <- readFile "inputs/01.txt"
  let input = map read $ lines contents
  print $ product $ head $ filter ((2020==) . sum) $ combinations 2 input
  print $ product $ head $ filter ((2020==) . sum) $ combinations 3 input

combinations :: Int -> [Int] -> [[Int]]
combinations 1 ns = map (:[]) ns
combinations k ns = concat $ zipWith (\t i -> map (t:) (combinations (k - 1) (drop i ns))) ns [1 .. length ns]

